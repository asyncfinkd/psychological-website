import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import dompurify from 'dompurify'
import ReactQuill from 'react-quill' // ES6

export default function AdminEventsPagesMap({
  i,
  host,
  image,
  title,
  route,
  description,
  setSpinner,
  header,
  deleteItem,
  _id,
  titleENValue,
  descriptionENValue,
  images,
}) {
  const sanitizer = dompurify.sanitize
  const [edit, setEdit] = useState(false)
  const [titleValue, setTitleValue] = useState(title)
  const [descriptionValue, setDescriptionValue] = useState(description)
  const [titleEN, setTitleEN] = useState(titleENValue)
  const [descriptionEN, setDescriptionEN] = useState(descriptionENValue)
  const [newImage, setNewImage] = useState('')
  const imageSourceRender = () => {
    if (image == '') {
      return `${images[0].url}`
    } else {
      return `${image}`
    }
  }
  const onChangeState = (e) => {
    let fileReader = new FileReader()
    fileReader.onload = () => {
      let fileURL = fileReader.result
      setNewImage(fileURL)
    }
    fileReader.readAsDataURL(e.target.files[0])
  }
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
        <div className="blog-post-thumb">
          {edit ? (
            <>
              <input type="file" alt="" onChange={onChangeState} />
            </>
          ) : (
            <div className="img">
              <img
                src={imageSourceRender()}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                alt=""
              />
            </div>
          )}
          <div className="blog-content">
            {edit ? (
              <div class="form-group">
                <ReactQuill
                  value={titleValue}
                  style={{
                    fontFamily: 'BPG Mrgvlovani Caps',
                    fontSize: '13px',
                    width: '300px',
                    margin: 'auto',
                  }}
                  onChange={(e) => setTitleValue(e)}
                />
              </div>
            ) : (
              <h3
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'BPG Mrgvlovani Caps',
                }}
              >
                <Link
                  to={`/events/${route}/${
                    localStorage.getItem('lang') == ''
                      ? 'ge'
                      : localStorage.getItem('lang')
                  }`}
                  target="_blank
                "
                  style={{ height: '50px' }}
                  dangerouslySetInnerHTML={{ __html: sanitizer(title) }}
                ></Link>
              </h3>
            )}
            {edit ? (
              <div class="form-group">
                <ReactQuill
                  value={descriptionValue}
                  style={{
                    fontFamily: 'BPG Mrgvlovani Caps',
                    fontSize: '13px',
                    width: '300px',
                    margin: 'auto',
                  }}
                  onChange={(e) => setDescriptionValue(e)}
                />
              </div>
            ) : (
              <div
                className="text mqmqm__21m3l"
                style={{
                  maxHeight: '75px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  fontFamily: 'BPG Mrgvlovani Caps',
                }}
                dangerouslySetInnerHTML={{ __html: sanitizer(description) }}
              ></div>
            )}
            {edit && (
              <div class="form-group">
                <ReactQuill
                  value={titleEN}
                  style={{
                    fontFamily: 'BPG Mrgvlovani Caps',
                    fontSize: '13px',
                    width: '300px',
                    margin: 'auto',
                  }}
                  onChange={(e) => setTitleEN(e)}
                />
              </div>
            )}
            {edit && (
              <div class="form-group">
                <ReactQuill
                  value={descriptionEN}
                  style={{
                    fontFamily: 'BPG Mrgvlovani Caps',
                    fontSize: '13px',
                    width: '300px',
                    margin: 'auto',
                  }}
                  onChange={(e) => setDescriptionEN(e)}
                />
              </div>
            )}
            <button
              className="btn btn-danger"
              style={{
                fontFamily: 'BPG Mrgvlovani Caps',
                fontSize: '13px',
              }}
              onClick={() => {
                setSpinner(true)
                window.scrollTo(0, 0)
                document.body.classList.add('append__body')
                axios
                  .post(
                    `${host}/api/delete/${route}`,
                    {
                      _id: _id,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${header}`,
                      },
                    },
                  )
                  .then((res) => {
                    if (res.data.success) {
                      setSpinner(false)
                      document.body.classList.remove('append__body')
                      deleteItem(route)
                      Swal.fire(
                        'გილოცავთ!',
                        'წარმატებით წაიშალა ღონისძიება!',
                        'success',
                      ).then(() => {
                        window.location.reload()
                      })
                    } else {
                      setSpinner(false)
                      document.body.classList.remove('append__body')
                      Swal.fire({
                        icon: 'error',
                        title: 'უფს...',
                        text: 'დაფიქსირდა შეცდომა!',
                      }).then(() => {
                        window.location.reload()
                      })
                    }
                  })
              }}
            >
              წაშლა
            </button>
            <button
              class="btn btn-success"
              style={{
                fontFamily: 'BPG Mrgvlovani Caps',
                fontSize: '12px',
                marginLeft: '20px',
              }}
              onClick={
                edit
                  ? () => {
                      document.body.classList.add('append__body')
                      window.scrollTo(0, 0)
                      setSpinner(true)
                      axios
                        .post(
                          `${host}/api/events/edit`,
                          {
                            title: title,
                            changedTitle: titleValue,
                            changedDescription: descriptionValue,
                            changedTitleEN: titleEN,
                            changedDescriptionEN: descriptionEN,
                            _id: _id,
                            image: newImage,
                          },
                          { headers: { Authorization: `Bearer ${header}` } },
                        )
                        .then((res) => {
                          setSpinner(false)
                          if (res.data.success) {
                            document.body.classList.remove('append__body')
                            Swal.fire(
                              'გილოცავთ!',
                              'წარმატებით შესრულდა ღონისძიების რედაქტირება',
                              'success',
                            ).then(() => {
                              window.location.reload()
                            })
                          } else {
                            Swal.fire({
                              icon: 'error',
                              title: 'უფს...',
                              text: `${res.data.message}`,
                            }).then((res) => {
                              window.location.reload()
                            })
                          }
                        })
                    }
                  : () => setEdit(!edit)
              }
            >
              {edit ? 'შენახვა' : 'რედაქტირება'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

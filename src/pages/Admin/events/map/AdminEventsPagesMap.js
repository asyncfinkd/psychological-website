import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

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
}) {
  const [edit, setEdit] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
        <div className="blog-post-thumb">
          <div className="img">
            <img
              src={`${host}/public/${image}`}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <div className="blog-content">
            {edit ? (
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                  rows="2"
                  style={{
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "13px",
                    width: "300px",
                    margin: "auto",
                  }}
                ></textarea>
              </div>
            ) : (
              <h3
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "BPG Mrgvlovani Caps",
                }}
              >
                <Link
                  to={`/events/${route}`}
                  target="_blank
                "
                  style={{ height: "50px" }}
                >
                  {title}
                </Link>
              </h3>
            )}
            {edit ? (
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  value={descriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                  rows="2"
                  style={{
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "13px",
                    width: "300px",
                    margin: "auto",
                  }}
                ></textarea>
              </div>
            ) : (
              <div
                className="text"
                style={{
                  maxHeight: "75px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontFamily: "BPG Mrgvlovani Caps",
                }}
              >
                {description}
              </div>
            )}
            <button
              className="btn btn-danger"
              style={{
                fontFamily: "BPG Mrgvlovani Caps",
                fontSize: "13px",
              }}
              onClick={() => {
                setSpinner(true);
                window.scrollTo(0, 0);
                document.body.classList.add("append__body");
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
                    }
                  )
                  .then((res) => {
                    if (res.data.success) {
                      setSpinner(false);
                      document.body.classList.remove("append__body");
                      deleteItem(route);
                      Swal.fire(
                        "გილოცავთ!",
                        "წარმატებით წაიშალა ღონისძიება!",
                        "success"
                      ).then(() => {
                        window.location.reload();
                      });
                    } else {
                      setSpinner(false);
                      document.body.classList.remove("append__body");
                      Swal.fire({
                        icon: "error",
                        title: "უფს...",
                        text: "დაფიქსირდა შეცდომა!",
                      }).then(() => {
                        window.location.reload();
                      });
                    }
                  });
              }}
            >
              წაშლა
            </button>
            <button
              class="btn btn-success"
              style={{
                fontFamily: "BPG Mrgvlovani Caps",
                fontSize: "12px",
                marginLeft: "20px",
              }}
              onClick={
                edit
                  ? () => {
                      document.body.classList.add("append__body");
                      window.scrollTo(0, 0);
                      setSpinner(true);
                      axios
                        .post(
                          `${host}/api/events/edit`,
                          {
                            title: title,
                            changedTitle: titleValue,
                            changedDescription: descriptionValue,
                          },
                          { headers: { Authorization: `Bearer ${header}` } }
                        )
                        .then((res) => {
                          setSpinner(false);
                          if (res.data.success) {
                            document.body.classList.remove("append__body");
                            Swal.fire(
                              "გილოცავთ!",
                              "წარმატებით შესრულდა ღონისძიების რედაქტირება",
                              "success"
                            ).then(() => {
                              window.location.reload();
                            });
                          } else {
                            Swal.fire({
                              icon: "error",
                              title: "უფს...",
                              text: `${res.data.message}`,
                            }).then((res) => {
                              window.location.reload();
                            });
                          }
                        });
                    }
                  : () => setEdit(!edit)
              }
            >
              {edit ? "შენახვა" : "რედაქტირება"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

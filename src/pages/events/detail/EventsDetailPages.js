import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar'
import { EventsContext } from '../../../context/events/EventsContext'
import { loadjsUtils } from './utils/loadjs'
import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import env from '../../../application/environment/env.json'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import Image from '../../../assets/images/2.jpg'
import dompurify from 'dompurify'

export default function EventsDetailPages({ match }) {
  const { events, setEvents } = useContext(EventsContext)
  const [data, setData] = useState([])
  const { t } = useTranslation()
  const { image } = data
  const sanitizer = dompurify.sanitize
  const lightGallery = useRef(null)
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-933',
      src: `${data.image}`,
      thumb: `${data.image}`,
    },
  ])
  useEffect(() => {
    if (data.image == '') {
      setItems(data.images)
    }
  })
  useEffect(() => {
    loadjsUtils()
  })
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance
    }
  }, [])

  const getItems = useCallback(() => {
    return items.map((item, i) => {
      return (
        <>
          {data.image == '' ? (
            <a key={item.id} className="gallery-item" data-src={`${item.url}`}>
              <img className="img-responsive" src={`${item.url}`} />
            </a>
          ) : (
            <a key={item.id} className="gallery-item" data-src={`${image}`}>
              <img className="img-responsive" src={`${image}`} />
            </a>
          )}
        </>
      )
    })
  })

  useEffect(() => {
    lightGallery.current.refresh()
  })

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    axios
      .get(
        `${env.host}/api/read/${match.params.id}/${localStorage.getItem(
          'lang',
        )}`,
      )
      .then((res) => {
        setData(res.data[0])
      })
  }, [])

  useEffect(() => {
    let splitPathname = window.location.pathname.split('/')
    const local = localStorage.getItem('lang')
    if (local != splitPathname[3]) {
      window.location.pathname = `${splitPathname[1]}/${
        splitPathname[2]
      }/${localStorage.getItem('lang')}`
    }
  })

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <div
          className="partners__slider__container"
          style={{
            background: `url(${Image}) no-repeat center center`,
            backgroundSize: 'cover',
            height: '424px',
          }}
        >
          <h3
            style={{ textAlign: 'center', fontFamily: 'BPG Mrgvlovani Caps' }}
            dangerouslySetInnerHTML={{ __html: sanitizer(data.title) }}
          ></h3>
          <span className="partners__slider__linker__container">
            <Link
              className="partners__slider__linker"
              to="/events"
              rel="noreferrer"
            >
              {t('EVENTS')}
            </Link>
          </span>
        </div>
      </div>
      <div style={{ marginBottom: '3rem' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <div className="d-flex align-items-center">
                  <img
                    src="http://epsy.ge/images/icons/calendar.svg"
                    alt=""
                    style={{
                      height: '16px',
                      marginTop: '-3px',
                      marginRight: '8px',
                    }}
                  />
                  <h5 style={{ marginTop: '5px' }}>{data.date}</h5>
                </div>
                <h3
                  className="about__title__container"
                  dangerouslySetInnerHTML={{ __html: sanitizer(data.title) }}
                ></h3>
                <div className="about__title__div">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="about__title__p"></p>
            <p
              className="about__title__p helvetica:medium color:gray"
              dangerouslySetInnerHTML={{
                __html: sanitizer(data.description),
              }}
            ></p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}></div>
      <div className="container">
        <div className="light__gallery__ts">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="custom-class-name mqwemlxqmwexl"
            onInit={onInit}
          >
            {getItems()}
          </LightGallery>
        </div>
      </div>
      <div style={{ marginBottom: '3rem' }}></div>

      <div style={{ marginBottom: '3rem' }}></div>

      <Footer />
    </>
  )
}

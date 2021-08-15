import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { EventsContext } from "../../../context/events/EventsContext";
import { loadjsUtils } from "./utils/loadjs";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import env from "../../../application/environment/env.json";

export default function EventsDetailPages({ match }) {
  const { events, setEvents } = useContext(EventsContext);
  const [data, setData] = useState([]);
  const { image } = data;
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: "1",
      size: "1400-933",
      src: `${data.image}`,
      thumb: `${data.image}`,
    },
  ]);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          className="gallery-item"
          data-src={`${env.host}/public/${image}`}
        >
          <img className="img-responsive" src={`${env.host}/public/${image}`} />
        </a>
      );
    });
  });

  useEffect(() => {
    lightGallery.current.refresh();
  });

  useEffect(() => {
    loadjsUtils();
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    events.map((item) => {
      if (item.route === match.params.id) {
        setData(item);
      }
    });
  });
  return (
    <>
      <Navbar />
      <div
        className="partners__slider__container"
        style={{
          background: `url(${env.host}/public/${image}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <h3 style={{ textAlign: "center", fontFamily: "BPG Mrgvlovani Caps" }}>
          {data.title}
        </h3>
        <span className="partners__slider__linker__container">
          <Link
            className="partners__slider__linker"
            onClick={() => {
              window.location.href = "/";
            }}
            rel="noreferrer"
          >
            მთავარი
          </Link>
          <span className="partners__slider__linker__animation"></span>
          <a
            className="partners__slider__linker active__partners__slider__linker"
            href="https://google.com"
            rel="noreferrer"
          >
            ღონისძიებები
          </a>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
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
                      height: "16px",
                      marginTop: "-3px",
                      marginRight: "8px",
                    }}
                  />
                  <h5 style={{ marginTop: "5px" }}>{data.date}</h5>
                </div>
                <h3 className="about__title__container">{data.title}</h3>
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
            <p className="about__title__p helvetica:medium color:gray">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="light__gallery__ts">
          <LightGallery
            plugins={[lgZoom]}
            elementClassNames="custom-class-name"
            onInit={onInit}
          >
            {getItems()}
          </LightGallery>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <h3 className="about__title__container">მსგავსი სიახლეები:</h3>
                <div className="about__title__div">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          {+match.params.id > events.length - 1 ? (
            <>
              <div className="col-lg-12 col-md-12">
                <div className="about__section__title">
                  <div className="about__title__header">
                    <h5 style={{ marginTop: "5px" }}>
                      მსგავსი სიახლეები ვერ მოიძებნა
                    </h5>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              {events
                .slice(match.params.id, match.params.id + 3)
                .map((item, i) => {
                  const { title, description, route } = item;

                  return (
                    <>
                      <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                        <div className="blog-post-thumb">
                          <div className="img">
                            <img
                              src={`${env.host}/public/${item.image}`}
                              alt=""
                            />
                          </div>
                          <div className="blog-content">
                            <h3
                              style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Link to={`/events/${route}`}>
                                {title.length < 116
                                  ? `${title.substr(0, 53)}...`
                                  : title.substr(0, 53)}
                              </Link>
                            </h3>
                            <div
                              className="text"
                              style={{
                                maxHeight: "75px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {description}
                            </div>
                            <Link
                              to={`/events/${route}`}
                              className="main-button"
                              style={{ fontFamily: "BPG Mrgvlovani Caps" }}
                            >
                              დაწვრილებით
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "3rem" }}></div>

      <Footer />
    </>
  );
}

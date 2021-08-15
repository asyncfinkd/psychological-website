import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import { EventsContext } from "../../context/events/EventsContext";
import loadjs from "loadjs";

export default function EventsPages() {
  const { events, setEvents } = useContext(EventsContext);

  useEffect(() => {
    loadjs("/assets/js/custom.js", {
      success: function () {
        loadjs.done("bundle");
      },
      error: function () {
        loadjs("/assets/js/custom.js", {
          success: function () {
            loadjs.done("bundle");
          },
        });
      },
    });
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>
          ღონისძიებები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის
        </title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>ღონისძიებები</h3>
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
          {events.map((item, i) => {
            const { title, description, image, route } = item;
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src={`assets/images/${image}`} alt="" />
                    </div>
                    <div className="blog-content">
                      <h3
                        style={{
                          height: "75px",
                          maxHeight: "75px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link to={`/events/${route}`}>
                          {title.length < 116
                            ? `${title.substr(0, 69)}...`
                            : title.substr(0, 116)}
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
        </div>
      </div>
    </>
  );
}

import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import { EventsContext } from "../../context/events/EventsContext";
import loadjs from "loadjs";
import env from "../../application/environment/env.json";

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
          <Link className="partners__slider__linker" to="/" rel="noreferrer">
            მთავარი
          </Link>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          {events.length < 1 ? (
            <p className="admin__wrapper__txt__Message">
              ღონისძიებები არ არსებობს.
            </p>
          ) : (
            <>
              {events.map((item, i) => {
                const { title, description, image, route } = item;
                return (
                  <>
                    <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                      <div className="blog-post-thumb">
                        <div className="img">
                          <img src={`${env.host}/public/${image}`} alt="" />
                        </div>
                        <div className="blog-content">
                          <h3
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "BPG Mrgvlovani Caps",
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
                              fontFamily: "BPG Mrgvlovani Caps",
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
    </>
  );
}

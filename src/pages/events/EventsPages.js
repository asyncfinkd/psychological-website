import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import { EventsContext } from "../../context/events/EventsContext";
import loadjs from "loadjs";
import env from "../../application/environment/env.json";
import { useTranslation } from "react-i18next";
import dompurify from "dompurify";

export default function EventsPages() {
  const { events, setEvents } = useContext(EventsContext);
  const { t } = useTranslation();
  const sanitizer = dompurify.sanitize;

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

  const renderWithProps = (firstCondition, secondCondition) => {
    const local = localStorage.getItem("lang");
    if (local == "en") {
      return firstCondition;
    } else {
      return secondCondition;
    }
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const imageSourceRender = (image, host, images) => {
    if (image == "") {
      return `${host}/public/${images[0].url}`;
    } else {
      return `${host}/public/${image}`;
    }
  };
  return (
    <>
      <Helmet>
        <title>{t("HELMET__EVENTS")}</title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>{t("EVENTS")}</h3>
        <span className="partners__slider__linker__container">
          <Link className="partners__slider__linker" to="/" rel="noreferrer">
            {t("HOME")}
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
              {events
                .slice(0, events.length)
                .reverse()
                .map((item, i) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                        <div className="blog-post-thumb">
                          <div className="img">
                            <img
                              src={imageSourceRender(
                                item.en[0].image,
                                env.host,
                                item.en[0].images
                              )}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
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
                                fontFamily: "BPG Mrgvlovani Caps",
                                justifyContent: "center",
                              }}
                            >
                              <Link
                                to={`${renderWithProps(
                                  `/events/${
                                    item.en[0].route
                                  }/${localStorage.getItem("lang")}`,
                                  `/events/${
                                    item.ge[0].route
                                  }/${localStorage.getItem("lang")}`
                                )}`}
                                style={{ height: "50px" }}
                                dangerouslySetInnerHTML={{
                                  __html: sanitizer(
                                    renderWithProps(
                                      item.en[0].title,
                                      item.ge[0].title
                                    )
                                  ),
                                }}
                              ></Link>
                            </h3>
                            <div
                              className="text mqmqm__21m3l"
                              style={{
                                maxHeight: "75px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontFamily: "BPG Mrgvlovani Caps",
                                display: "flex",
                                gap: "2px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                  renderWithProps(
                                    item.en[0].description,
                                    item.ge[0].description
                                  )
                                ),
                              }}
                            ></div>
                            <Link
                              to={`${renderWithProps(
                                `/events/${
                                  item.en[0].route
                                }/${localStorage.getItem("lang")}`,
                                `/events/${
                                  item.ge[0].route
                                }/${localStorage.getItem("lang")}`
                              )}`}
                              className="main-button"
                              style={{ fontFamily: "BPG Mrgvlovani Caps" }}
                            >
                              {t("READMORE")}
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

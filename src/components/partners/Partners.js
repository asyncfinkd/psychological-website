import React, { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./Partners.css";
import Footer from "../footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadjs from "loadjs";
import { EventsContext } from "../../context/events/EventsContext";
import { useTranslation } from "react-i18next";

export default function Partners() {
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
  const {t} = useTranslation();
  const { partners } = useContext(EventsContext);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>
          {t("HELMET__PARTNERS")}
        </title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>{t("PARTNERS")}</h3>
        <span className="partners__slider__linker__container">
          <Link className="partners__slider__linker" to="/" rel="noreferrer">
            {t("HOME")}
          </Link>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-1">
            <div className="row">
              <div className="col-lg-12">
                {partners.length < 1 ? (
                  <>
                    <p className="admin__wrapper__txt__Message">
                      ივენთები არ არსებობს.
                    </p>
                  </>
                ) : (
                  <>
                    {partners.map((item) => {
                      return (
                        <>
                          <div className="flex__partner__container">
                            <div
                              className="row no-gutters"
                              style={{ alignItems: "center" }}
                            >
                              <div className="col-md-3 col-lg-3">
                                <div className="partner__featured__thumbnail">
                                  <img
                                    src={item.image}
                                    className="img-fluid partners__image__fluid"
                                    alt="qwe"
                                  />
                                </div>
                              </div>
                              <div className="col-md-9 col-lg-9">
                                <div className="partner__featured__content">
                                  <div>
                                    <span className="partner__featured__metaLine">
                                      <a
                                        href={item.route}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <img
                                          src="https://epsy.ge/images/icons/web.svg"
                                          alt=""
                                        />
                                        <span>{item.route}</span>
                                      </a>
                                    </span>
                                  </div>
                                  <div>
                                    <h5 className="partner__featured__title">
                                      {item.title}
                                    </h5>
                                  </div>
                                </div>
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
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <Footer />
    </>
  );
}

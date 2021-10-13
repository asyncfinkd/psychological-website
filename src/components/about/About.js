import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";
import loadjs from "loadjs";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
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

  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>{t("HELMET__ABOUT")}</title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>{t("ABOUT")}</h3>
        <span className="partners__slider__linker__container">
          <Link
            className="partners__slider__linker"
            style={{ fontFamily: "BPG Arial" }}
            to="/"
            rel="noreferrer"
          >
            {t("HOME")}
          </Link>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <h5>{t("PSYCHOLOGICALTITLE")}</h5>
                <h3 className="about__title__container">
                  {t("PSYCHOLOGICALSUBTITLE")}
                </h3>
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
              className="about__title__p color:gray"
              style={{ fontFamily: "BPG Arial" }}
            >
              {t("PSYCHOLOGICALCODE")}
            </p>
            <p
              className="about__title__p color:gray"
              style={{ fontFamily: "BPG Arial" }}
            >
              <br />
              {t("PSYCHOLOGICALPURPOSE")}
              <br />
              &nbsp; &nbsp; 1. {t("PSYCHOLOGICALFIRSTPURPOSE")}
              <br />
              &nbsp; &nbsp; 2. {t("PSYCHOLOGICALSECONDPURPOSE")}
              <br />
              &nbsp; &nbsp; 3. {t("PSYCHOLOGICALTHIRDPURPOSE")}
              <br />
              &nbsp; &nbsp; 4. {t("PSYCHOLOGICALFOURPURPOSE")}
              <br />
              &nbsp; &nbsp; 5. {t("PSYCHOLOGICALFIVEPURPOSE")}
            </p>
            <p
              className="about__title__p color:gray"
              style={{ fontFamily: "BPG Arial" }}
            >
              <br />
              {t("PSYCHOLOGICALPROJECTREVIEW")}
            </p>
            <p
              className="about__title__p color:gray"
              style={{ fontFamily: "BPG Arial" }}
            >
              <br />
              {t("PSYCHOLOGICALPROJECTREVIEWSECOND")}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <Footer />
    </>
  );
}

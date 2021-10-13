import loadjs from "loadjs";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function GalleryPages() {
  const { t } = useTranslation();
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
  return (
    <>
      <Helmet>
        <title>{t("HELMET__GALLERY")}</title>
      </Helmet>
      <Navbar />
      <div style={{ position: "relative" }}>
        <div
          className="partners__slider__container"
          style={{ height: "424px" }}
        >
          <h3
            style={{ textAlign: "center", fontFamily: "BPG Mrgvlovani Caps" }}
          >
            {t("PHOTO_GALLERY")}
          </h3>
          <span className="partners__slider__linker__container">
            <Link className="partners__slider__linker" to="/" rel="noreferrer">
              {t("HOME")}
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

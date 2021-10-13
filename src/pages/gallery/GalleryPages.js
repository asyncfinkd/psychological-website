import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar/Navbar";

export default function GalleryPages() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("HELMET__GALLERY")}</title>
      </Helmet>
      <Navbar />
    </>
  );
}

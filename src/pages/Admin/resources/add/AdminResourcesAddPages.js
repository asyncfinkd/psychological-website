import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import AdminNavbar from "../../../../components/admin/navbar/AdminNavbar";
import { loadjsUtils } from "../../../events/detail/utils/loadjs";

export default function AdminResourcesAddPages() {
  const { t } = useTranslation();
  useEffect(() => {
    loadjsUtils();
  });
  return (
    <>
      <Helmet>
        <title>{t("RESOURCES__ADD__TITLE")}</title>
      </Helmet>
      <AdminNavbar />
    </>
  );
}

import React, { useState } from "react";
import AdminSignin from "../../components/admin/signin/AdminSignin";
import AdminIndex from "../../components/admin/index/AdminIndex";
import Swal from "sweetalert2";

export default function AdminPages() {
  const renderAdminPanel = () => {
    const [local, setLocal] = useState(false);
    if (localStorage.getItem("admin__modal") != "true" || local == false) {
      Swal.fire(
        "გაფრთხილება!",
        "ნებისმიერმა თქვენმა მოქმედებამ შეიძლება შეცვალოს ვებ-საიტის სისტემა",
        "info"
      ).then(() => {
        localStorage.setItem("admin__modal", true);
        setLocal(true);
      });
    } else {
      return <AdminIndex />;
    }
  };
  return (
    <>
      {localStorage.getItem("logged") === "true" ? (
        <>{renderAdminPanel()}</>
      ) : (
        <>
          <AdminSignin />
        </>
      )}
    </>
  );
}

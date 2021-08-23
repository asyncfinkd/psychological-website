import React, { useState } from "react";
import AdminSignin from "../../components/admin/signin/AdminSignin";
import AdminIndex from "../../components/admin/index/AdminIndex";
import Swal from "sweetalert2";

export default function AdminPages() {
  return (
    <>
      {localStorage.getItem("logged") === "true" ? (
        <>
          <AdminIndex />
        </>
      ) : (
        <>
          <AdminSignin />
        </>
      )}
    </>
  );
}

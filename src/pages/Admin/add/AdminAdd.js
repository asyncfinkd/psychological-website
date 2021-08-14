import React from "react";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";

export default function AdminAdd() {
  return (
    <>
      {localStorage.getItem("logged") === "true" ? (
        <AdminNavbar />
      ) : (
        (window.location.href = "/admin")
      )}
    </>
  );
}

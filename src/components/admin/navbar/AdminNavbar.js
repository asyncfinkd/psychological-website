import React from "react";
import "./AdminNavbar.css";

export default function AdminNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="navbar__content-header">
        <div className="navbar__content__ng"></div>
      </div>
    </>
  );
}

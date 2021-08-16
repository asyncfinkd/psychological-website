import React, { useEffect } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import AdminSidebar from "../sidebar/AdminSidebar";
import { useLocation } from "react-router-dom";
import { loadjsUtils } from "../../../pages/events/detail/utils/loadjs";

export default function AdminIndex() {
  useEffect(() => {
    loadjsUtils();
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <AdminNavbar />
      <AdminSidebar />
    </>
  );
}

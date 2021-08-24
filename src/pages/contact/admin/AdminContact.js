import React, { useEffect } from "react";
import Navbar from "../../../components/admin/navbar/AdminNavbar";
import { loadjsUtils } from "../../events/detail/utils/loadjs";
import { useLocation, Link } from "react-router-dom";

export default function AdminContact() {
  useEffect(() => {
    loadjsUtils();
  })
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return(
    <>
      <Navbar />
    </>
  )
}

import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";
import { EventsContext } from "../../../context/events/EventsContext";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { loadjsUtils } from "../../events/detail/utils/loadjs";
import env from "../../../application/environment/env.json";
import AdminPartnersPagesMap from "./map/AdminPartnersPagesMap";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminPartnersPages() {
  const { clicked, partners, setPartners } = useContext(EventsContext);
  const [spinner, setSpinner] = useState(false);
  const deleteItem = (key) => {
    const updateList = partners.filter((item) => item.route !== key);

    setPartners(updateList);
  };
  useEffect(() => {
    loadjsUtils();
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {localStorage.getItem("logged") === "true" ? (
        <>
            {spinner && (
            <>
              <div id="loading__bg"></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  position: "absolute",
                  margin: "0 auto",
                  left: "50%",
                  marginLeft: "-25px",
                }}
              >
                <div id="loading"></div>
              </div>
            </>
          )}
          <AdminNavbar />
          <div className={clicked ? "sidebar__none" : "sidebar__container"}>
            <ul className="sidebar__container-ul">
              <li
                className="sidebar__container-li__prev"
                style={{ borderRadius: "0px" }}
              ></li>
              <Link to="/admin" className="sidebar__container__default__li">
                <div className="sidebar__container__default__li-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    className="sidebar__container__default__li-svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="dashboard"
                      d="M3,5.222A2.222,2.222,0,0,1,5.222,3H9.667a2.222,2.222,0,0,1,2.222,2.222V9.667a2.222,2.222,0,0,1-2.222,2.222H5.222A2.222,2.222,0,0,1,3,9.667Zm6.667,0H5.222V9.667H9.667Zm4.444,0A2.222,2.222,0,0,1,16.333,3h4.444A2.222,2.222,0,0,1,23,5.222V9.667a2.222,2.222,0,0,1-2.222,2.222H16.333a2.222,2.222,0,0,1-2.222-2.222Zm6.667,0H16.333V9.667h4.444ZM3,16.333a2.222,2.222,0,0,1,2.222-2.222H9.667a2.222,2.222,0,0,1,2.222,2.222v4.444A2.222,2.222,0,0,1,9.667,23H5.222A2.222,2.222,0,0,1,3,20.778Zm6.667,0H5.222v4.444H9.667Zm4.444,0a2.222,2.222,0,0,1,2.222-2.222h4.444A2.222,2.222,0,0,1,23,16.333v4.444A2.222,2.222,0,0,1,20.778,23H16.333a2.222,2.222,0,0,1-2.222-2.222Zm6.667,0H16.333v4.444h4.444Z"
                      transform="translate(-3 -3)"
                    ></path>
                  </svg>
                  <p className="sidebar__container__default__li-paragraph">
                    მთავარი
                  </p>
                </div>
              </Link>
              <Link
                to="/admin/events"
                className="sidebar__container__default__li"
              >
                <div className="sidebar__container__default__li-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    viewBox="0 0 18.947 20"
                    className="sidebar__container__default__li-svg"
                  >
                    <path
                      id="calendar"
                      d="M9.316,2a1.053,1.053,0,0,1,1.053,1.053V4.105h4.211V3.053a1.053,1.053,0,0,1,2.105,0V4.105h3.158a2.105,2.105,0,0,1,2.105,2.105V19.895A2.105,2.105,0,0,1,19.842,22H5.105A2.105,2.105,0,0,1,3,19.895V6.211A2.105,2.105,0,0,1,5.105,4.105H8.263V3.053A1.053,1.053,0,0,1,9.316,2ZM8.263,6.211H5.105V9.368H19.842V6.211H16.684V7.263a1.053,1.053,0,1,1-2.105,0V6.211H10.368V7.263a1.053,1.053,0,1,1-2.105,0Zm11.579,5.263H5.105v8.421H19.842Z"
                      transform="translate(-3 -2)"
                    ></path>
                  </svg>
                  <p className="sidebar__container__default__li-paragraph">
                    ივენთები
                  </p>
                </div>
              </Link>
              <Link
                to="/admin/about"
                className="sidebar__container__default__li"
              >
                <div className="sidebar__container__default__li-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 210.4 145.9"
                    className="sidebar__container__default__li-svg"
                  >
                    <g>
                      <rect
                        y="49.8"
                        class="st0"
                        width="166.8"
                        height="27.9"
                      ></rect>
                      <polygon
                        class="st0"
                        points="154.5,106.5 134.5,86.4 114.8,106.2 154.5,145.9 210.4,90.1 190.7,70.4  "
                      ></polygon>
                      <rect class="st0" width="166.8" height="27.9"></rect>
                      <rect
                        y="95.5"
                        class="st0"
                        width="85.5"
                        height="27.9"
                      ></rect>
                    </g>
                  </svg>
                  <p className="sidebar__container__default__li-paragraph">
                    შესახებ
                  </p>
                </div>
              </Link>
              <Link to="/admin/partners" className="sidebar__container-li">
                <div className="sidebar__container-li__content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    width="18"
                    height="18"
                    className="sidebar__container-li__contentSVG"
                    viewBox="0 0 21.75 21.75"
                  >
                    <defs></defs>
                    <path
                      id="Rectangle_1642"
                      d="M0 0h10.634v1.745H0z"
                      class="cls-1"
                      data-name="Rectangle 1642"
                      transform="translate(5.558)"
                    ></path>
                    <path
                      id="Rectangle_1643"
                      d="M0 0h15.797v1.745H0z"
                      class="cls-1"
                      data-name="Rectangle 1643"
                      transform="translate(2.975 3.49)"
                    ></path>
                    <path
                      id="Path_1126"
                      d="M0 8.022v14.771h21.75V8.022zm20.01 13.031H1.74V9.762h18.27z"
                      class="cls-1"
                      data-name="Path 1126"
                      transform="translate(0 -1.043)"
                    ></path>
                  </svg>
                  <p className="sidebar__container-li__paragraph">პარტნიორი</p>
                </div>
              </Link>
            </ul>
          </div>
          <div
            className={
              clicked ? "admin__wrapper__full admin__wrapper" : "admin__wrapper"
            }
          >
            <div className="admin__wrapper__content">
              <div className="admin__wrapper__flex">
                <div>
                  <h2 className="admin__wrapper__content__title">
                    პარტნიორები
                  </h2>
                </div>
                <div>
                  <button
                    className="btn btn-outline-success hover__adm"
                    style={{
                      fontFamily: "BPG Mrgvlovani Caps",
                      fontSize: "12px",
                      marginTop: "-17px",
                    }}
                  >
                    <Link
                      className="btn__hover__admin"
                      to="/admin/partners/add"
                    >
                      დამატება
                    </Link>
                  </button>
                </div>
              </div>
              <div className="admin__wrapper__content__title-flex">
                {partners.map((item) => {
                  return (
                    <>
                      <AdminPartnersPagesMap
                        image={item.image}
                        route={item.route}
                        title={item.title}
                        host={env.host}
                        type={item.type}
                        deleteFunction={() => {
                          setSpinner(true);
                          window.scrollTo(0, 0);
                          document.body.classList.add("append__body");
                          axios
                            .post(`${env.host}/api/delete/partners/${item.title}`, {
                              title: item.title,
                            })
                            .then((res) => {
                          setSpinner(false);
                          document.body.classList.remove("append__body");
                              if (res.data.success) {
                                deleteItem(item.route);
                                Swal.fire(
                                  "გილოცავთ!",
                                  "წარმატებით წაიშალა პარტნიორი!",
                                  "success"
                                ).then(() => {
                                  window.location.reload();
                                });
                              } else {
                                Swal.fire({
                                  icon: "error",
                                  title: "უფს...",
                                  text: "დაფიქსირდა შეცდომა!",
                                }).then(() => {
                                  window.location.reload();
                                }); 
                              }
                            });
                        }}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        (window.location.href = "/admin")
      )}
    </>
  );
}

import React, { useEffect, useContext } from "react";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";
import { EventsContext } from "../../../context/events/EventsContext";
import { Link } from "react-router-dom";
import { loadjsUtils } from "../../events/detail/utils/loadjs";
import { useLocation } from "react-router-dom";

export default function AdminAdd() {
  const { clicked, setClicked } = useContext(EventsContext);
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
            </ul>
          </div>
          <div
            className={
              clicked ? "admin__wrapper__full admin__wrapper" : "admin__wrapper"
            }
          >
            <div className="admin__wrapper__content">
              <form onSubmit={(e) => e.preventDefault()}>
                <div class="form-group">
                  <label
                    for="inputAddress"
                    style={{
                      fontFamily: "BPG Mrgvlovani Caps",
                      fontSize: "13px",
                    }}
                  >
                    სათაური
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    style={{
                      fontSize: "13px",
                    }}
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleFormControlTextarea1"
                    style={{
                      fontFamily: "BPG Mrgvlovani Caps",
                      fontSize: "13px",
                    }}
                  >
                    აღწერა
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    style={{
                      fontSize: "13px",
                    }}
                    rows="3"
                  ></textarea>
                </div>
                <div class="custom-file" style={{ marginBottom: "0.8rem" }}>
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label
                    class="custom-file-label"
                    for="customFile"
                    style={{
                      fontFamily: "BPG Mrgvlovani Caps",
                      fontSize: "13px",
                    }}
                  >
                    აირჩიეთ ფაილი
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "11px",
                  }}
                >
                  დამატება
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        (window.location.href = "/admin")
      )}
    </>
  );
}

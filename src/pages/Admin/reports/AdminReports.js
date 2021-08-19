import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";
import { EventsContext } from "../../../context/events/EventsContext";
import { Link } from "react-router-dom";

export default function AdminReports() {
  const { clicked } = useContext(EventsContext);
  return (
    <>
      <Helmet>
        <title>
          რეპორტები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის
        </title>
      </Helmet>
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
          <Link to="/admin/events" className="sidebar__container__default__li">
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
          <Link to="/admin/about" className="sidebar__container__default__li">
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
                  <rect y="49.8" class="st0" width="166.8" height="27.9"></rect>
                  <polygon
                    class="st0"
                    points="154.5,106.5 134.5,86.4 114.8,106.2 154.5,145.9 210.4,90.1 190.7,70.4  "
                  ></polygon>
                  <rect class="st0" width="166.8" height="27.9"></rect>
                  <rect y="95.5" class="st0" width="85.5" height="27.9"></rect>
                </g>
              </svg>
              <p className="sidebar__container__default__li-paragraph">
                შესახებ
              </p>
            </div>
          </Link>
          <Link
            to="/admin/partners"
            className="sidebar__container__default__li"
          >
            <div className="sidebar__container__default__li-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                width="18"
                height="18"
                className="sidebar__container__default__li-svg"
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
              <p className="sidebar__container__default__li-paragraph">
                პარტნიორი
              </p>
            </div>
          </Link>
          <Link to="/admin/reports" className="sidebar__container-li">
            <div className="sidebar__container-li__content">
              <svg
                aria-hidden="true"
                focusable="false"
                width="18"
                height="18"
                data-prefix="far"
                data-icon="flag"
                className="sidebar__container-li__contentSVG"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"
                  class=""
                ></path>
              </svg>
              <p className="sidebar__container-li__paragraph">რეპორტები</p>
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
              <h2 className="admin__wrapper__content__title">რეპორტები</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

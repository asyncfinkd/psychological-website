import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/admin/navbar/AdminNavbar";
import { EventsContext } from "../../../context/events/EventsContext";
import { loadjsUtils } from "../../events/detail/utils/loadjs";
import env from "../../../application/environment/env.json";

export default function AdminResourcesPages() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    loadjsUtils();
  });
  useEffect(() => {
    axios.get(`${env.host}/api/get/resources`).then((result) => {
      setData(result.data);
    });
  }, []);
  const { clicked, setClicked } = useContext(EventsContext);
  return (
    <>
      <Helmet>
        <title>{t("RESOURCES__TITLE")}</title>
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
          <Link to="/admin/resources" className="sidebar__container-li">
            <div className="sidebar__container-li__content">
              <svg
                version="1.1"
                id="Слой_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="sidebar__container-li__contentSVG"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
              >
                <g>
                  <path
                    class="st0"
                    d="M497.7,340.2C507,313.8,512,285.5,512,256s-5-57.8-14.2-84.2c-0.2-0.8-0.5-1.6-0.8-2.3
		C461.4,70.8,366.8,0,256,0S50.6,70.8,15.1,169.5c-0.3,0.7-0.6,1.5-0.8,2.3C5,198.2,0,226.5,0,256s5,57.8,14.2,84.2
		c0.2,0.8,0.5,1.6,0.8,2.3C50.6,441.2,145.2,512,256,512s205.4-70.8,240.9-169.5C497.3,341.8,497.5,341,497.7,340.2z M256,475.3
		c-9.7,0-25.5-17.6-38.6-57.1c-6.3-19-11.4-40.9-15.1-64.7h107.4c-3.7,23.8-8.8,45.7-15.1,64.7C281.5,457.7,265.8,475.3,256,475.3z
		 M197.8,316.9c-1.8-19.6-2.7-40-2.7-60.9s0.9-41.3,2.7-60.9h116.3c1.8,19.6,2.7,40,2.7,60.9s-0.9,41.3-2.7,60.9H197.8z M36.7,256
		c0-21.1,3-41.5,8.6-60.9H161c-1.7,20-2.6,40.4-2.6,60.9s0.9,40.9,2.6,60.9H45.3C39.7,297.5,36.7,277.1,36.7,256z M256,36.7
		c9.7,0,25.5,17.6,38.6,57.1c6.3,19,11.4,40.9,15.1,64.7H202.3c3.7-23.8,8.8-45.7,15.1-64.7C230.5,54.3,246.3,36.7,256,36.7z
		 M351,195.1h115.7c5.6,19.3,8.6,39.8,8.6,60.9s-3,41.5-8.6,60.9H351c1.7-20,2.6-40.4,2.6-60.9S352.7,215.1,351,195.1z M452.4,158.4
		H346.8c-6.5-45-17.7-85.4-33.4-114.1C374.2,60.8,424.7,103,452.4,158.4z M198.7,44.3C183,73,171.8,113.4,165.2,158.4H59.6
		C87.3,103,137.8,60.8,198.7,44.3z M59.6,353.6h105.6c6.5,45,17.7,85.4,33.4,114.1C137.8,451.2,87.3,409,59.6,353.6z M313.3,467.7
		c15.7-28.7,26.9-69.1,33.4-114.1h105.6C424.7,409,374.2,451.2,313.3,467.7z"
                  />
                </g>
              </svg>

              <p className="sidebar__container-li__paragraph">მასალები</p>
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
                  <rect
                    y="49.8"
                    className="st0"
                    width="166.8"
                    height="27.9"
                  ></rect>
                  <polygon
                    className="st0"
                    points="154.5,106.5 134.5,86.4 114.8,106.2 154.5,145.9 210.4,90.1 190.7,70.4  "
                  ></polygon>
                  <rect className="st0" width="166.8" height="27.9"></rect>
                  <rect
                    y="95.5"
                    className="st0"
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
          <Link
            to="/admin/partners"
            className="sidebar__container__default__li"
          >
            <div className="sidebar__container__default__li-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                width="18"
                style={{ fill: "white" }}
                height="18"
                viewBox="0 0 21.75 21.75"
              >
                <defs></defs>
                <path
                  id="Rectangle_1642"
                  d="M0 0h10.634v1.745H0z"
                  className="cls-1"
                  data-name="Rectangle 1642"
                  transform="translate(5.558)"
                ></path>
                <path
                  id="Rectangle_1643"
                  d="M0 0h15.797v1.745H0z"
                  className="cls-1"
                  data-name="Rectangle 1643"
                  transform="translate(2.975 3.49)"
                ></path>
                <path
                  id="Path_1126"
                  d="M0 8.022v14.771h21.75V8.022zm20.01 13.031H1.74V9.762h18.27z"
                  className="cls-1"
                  data-name="Path 1126"
                  transform="translate(0 -1.043)"
                ></path>
              </svg>
              <p className="sidebar__container__default__li-paragraph">
                პარტნიორი
              </p>
            </div>
          </Link>
          <Link to="/admin/reports" className="sidebar__container__default__li">
            <div className="sidebar__container__default__li-div">
              <svg
                aria-hidden="true"
                focusable="false"
                width="18"
                height="18"
                data-prefix="far"
                data-icon="flag"
                className="svg__flag__adminSidebar"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"
                  className=""
                ></path>
              </svg>
              <p className="sidebar__container__default__li-paragraph">
                რეპორტები
              </p>
            </div>
          </Link>
          <Link to="/admin/contact" className="sidebar__container__default__li">
            <div className="sidebar__container__default__li-div">
              <svg
                version="1.1"
                id="Слой_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                className="svg__flag__adminSidebar"
                width="18"
                height="18"
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          className="st0"
                          d="M276,251.5c0-11-8.9-20-20-20c-30.8,0-55.9-25.1-55.9-55.9s25.1-55.9,55.9-55.9s55.9,25.1,55.9,55.9
					c0,11,8.9,20,20,20s20-8.9,20-20c0-52.8-43-95.8-95.8-95.8s-95.8,43-95.8,95.8s43,95.8,95.8,95.8C267,271.5,276,262.5,276,251.5
					z"
                        />
                        <path
                          className="st0"
                          d="M506.6,443.7l-37.5-76.2c-8.9-18-26.8-29.2-46.9-29.2h-20.4c-11,0-20,8.9-20,20s8.9,20,20,20h20.4
					c4.7,0,9,2.6,11.1,6.9l37.5,76.2c1.6,3.2,0.5,5.9-0.4,7.2c-0.8,1.3-2.7,3.5-6.3,3.5H47.9c-3.6,0-5.5-2.2-6.3-3.5s-1.9-4-0.4-7.2
					l37.5-76.2c2.1-4.3,6.3-6.9,11.1-6.9h19.4c11,0,20-8.9,20-20s-8.9-20-20-20H89.8c-20.1,0-38,11.2-46.9,29.2L5.4,443.7
					c-7.3,14.8-6.4,32,2.3,45.9c8.7,14,23.7,22.3,40.2,22.3h416.2c16.5,0,31.5-8.4,40.2-22.3C513,475.7,513.9,458.5,506.6,443.7z"
                        />
                        <path
                          className="st0"
                          d="M233.8,425.8c3.7,5.8,10,9.3,16.9,9.3h10c6.9,0,13.2-3.5,16.9-9.3c18.2-28.8,41-53.9,63.1-78.1
					c44-48.3,89.5-98.2,89.6-173.1C430.3,78.4,351.9,0,255.7,0S81.2,78.4,81,174.7c0.1,74.8,45.6,124.8,89.6,173
					C192.8,372,215.6,397,233.8,425.8z M255.7,39.9c74.2,0,134.7,60.5,134.7,134.7c-0.1,59.4-36.7,99.6-79.2,146.2
					c-18.8,20.7-38.2,41.9-55.5,66.1c-17.3-24.2-36.7-45.4-55.5-66.1c-42.5-46.6-79.1-86.8-79.2-146.1
					C121.1,100.4,181.5,39.9,255.7,39.9z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="sidebar__container__default__li-paragraph">
                კონტაქტი
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
          <div className="admin__wrapper__flex">
            <div>
              <h2 className="admin__wrapper__content__title">მასალები</h2>
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
                <Link className="btn__hover__admin" to="/admin/resources/add">
                  დამატება
                </Link>
              </button>
            </div>
          </div>
          <div
            className="admin__wrapper__content__title-flex"
            style={{ marginTop: "0px" }}
          >
            <section
              className="section home-feature"
              style={{ marginTop: "0px", paddingTop: "20px" }}
            >
              {data.length == 0 ? (
                <p
                  style={{
                    marginLeft: "15px",
                    fontFamily: "BPG Mrgvlovani Caps",
                    fontSize: "13px",
                    color: "#777",
                  }}
                >
                  მასალები არ არსებობს
                </p>
              ) : (
                <>
                  {data.map((item) => {
                    return (
                      <>
                        <p style={{ marginLeft: "15px", marginTop: "15px" }}>
                          https://psychological-backend.herokuapp.com/public/
                          {item.url}
                        </p>
                        <button
                          className="btn btn-danger"
                          style={{
                            fontFamily: "BPG Mrgvlovani Caps",
                            fontSize: "12px",
                            marginLeft: "15px",
                          }}
                          onClick={() => {
                            axios
                              .post(
                                `${env.host}/api/delete/resources`,
                                {
                                  url: item.url,
                                },
                                {
                                  headers: {
                                    Authorization: `Bearer ${localStorage.getItem(
                                      "header"
                                    )}`,
                                  },
                                }
                              )
                              .then((result) => {
                                console.log(result);
                              });
                          }}
                        >
                          წაშლა
                        </button>
                      </>
                    );
                  })}
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

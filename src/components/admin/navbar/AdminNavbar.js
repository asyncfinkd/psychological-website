import React from "react";
import "./AdminNavbar.css";

export default function AdminNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="navbar__content-header">
        <div className="navbar__content__ng">
          <div className="navbar__left__content">
            <img
              className="navbar__brand__image"
              alt=""
              src="http://epsy.ge/fav/apple-icon-57x57.png"
            />
            <label className="navbar__brand__label">სამართავი პანელი</label>
            <div className="navbar__burger__closer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                viewBox="0 0 42 42"
                className="navbar__burger__icon"
              >
                <g id="menu" transform="translate(-232 -8)">
                  <rect
                    id="Rectangle_1952"
                    data-name="Rectangle 1952"
                    width="42"
                    height="42"
                    rx="14"
                    transform="translate(232 8)"
                    fill="#e7e9f0"
                  ></rect>
                  <path
                    id="Path_3358"
                    data-name="Path 3358"
                    d="M4,7A1,1,0,0,1,5,6H19a1,1,0,0,1,0,2H5A1,1,0,0,1,4,7Zm0,5a1,1,0,0,1,1-1H19a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm0,5a1,1,0,0,1,1-1H19a1,1,0,0,1,0,2H5A1,1,0,0,1,4,17Z"
                    transform="translate(241 17)"
                    fill="#0b0c13"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="navbar__right__content">
            <div className="navbar__mail__notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                viewBox="0 0 18 20"
                className="navbar__mail__svg"
              >
                <path
                  id="notification"
                  d="M10.146,3.248a2,2,0,0,1,3.708,0A7,7,0,0,1,19,10v4.7l1.832,2.748A1,1,0,0,1,20,19H15.465a3.5,3.5,0,0,1-6.929,0H4a1,1,0,0,1-.832-1.555L5,14.7V10A7,7,0,0,1,10.146,3.248ZM10.585,19a1.5,1.5,0,0,0,2.829,0ZM12,5a5,5,0,0,0-5,5v5a1,1,0,0,1-.168.555L5.869,17H18.132l-.964-1.445A1,1,0,0,1,17,15V10A5,5,0,0,0,12,5Z"
                  transform="translate(-3 -2)"
                ></path>
              </svg>
            </div>
            <div className="navbar__userName">
              <label className="navbar__userRole">
                {user.role === "admin" ? "ადმინისტრატორი" : "მიუწვდომელია"}
              </label>
              <label className="navbar__userRole">{user.username}</label>
            </div>
            <div className="navbar__profilePic">
              <div className="navbar__profile__logo">
                <img
                  src="https://onlineschool.emis.ge/assets/images/pattern.png"
                  alt=""
                  className="navbar__profile__logoImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

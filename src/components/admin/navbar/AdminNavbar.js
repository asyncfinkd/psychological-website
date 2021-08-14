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
          <div></div>
        </div>
      </div>
    </>
  );
}

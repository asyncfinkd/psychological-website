import React from "react";
import { Helmet } from "react-helmet";
import "./ErrorPages.css";

export default function ErrorPages() {
  return (
    <>
      <Helmet>
        <title>Error 404 (Not Found)!!!</title>
      </Helmet>
      <div className="error__pages__container">
        <div>
          <img
            src="http://epsy.ge/fav/apple-icon-57x57.png"
            alt=""
            className="error__pages__container__img"
          />
          <p>
            <b className="error__pages__b">404.</b>
            <ins className="error__pages__ins">შეცდომა</ins>
          </p>
          <p className="error__pages__p">
            მოთხოვნილი მისამართი <code>{window.location.pathname}</code> ვერ
            მოიძებნა სერვერზე
          </p>
          <ins class="error__pages__ins" style={{ marginLeft: "0" }}>
            შიგთავსი დაზიანებულია ან არ არსებობს
          </ins>
        </div>
        <img
          src="https://www.google.com/images/errors/robot.png"
          alt=""
          className="error__pages__robot"
        />
      </div>
    </>
  );
}

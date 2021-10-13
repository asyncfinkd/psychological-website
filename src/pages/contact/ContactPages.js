import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./ContactPages.css";
import Footer from "../../components/footer/Footer";
import loadjs from "loadjs";
import { Helmet } from "react-helmet";
import axios from "axios";
import env from "../../application/environment/env.json";
import Swal from "sweetalert2";
import Recaptcha from "react-recaptcha";
import { useTranslation } from "react-i18next";

export default function ContactPages() {
  const { t } = useTranslation();
  const verifyCallback = (response) => {
    if (response) {
      setVerified(true);
    } else {
      if (verified != true) {
        window.location.reload();
      }
    }
    console.log("verified");
  };
  const recaptchaLoaded = () => {
    console.log("__recaptcha__7896654123123");
  };
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [data, setData] = useState([]);
  const [usernameError, setUsernameError] = useState(false);
  const usernameRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const emailRef = useRef();
  const [phoneError, setPhoneError] = useState(false);
  const phoneRef = useRef();
  const [messageError, setMessageError] = useState(false);
  const messageRef = useRef();
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [verified, setVerified] = useState(false);
  const [date, setDate] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    var todayDate = new Date();
    var dd = String(todayDate.getDate()).padStart(2, "0");
    var mm = String(todayDate.getMonth() + 1).padStart(2, "0");
    var yyyy = todayDate.getFullYear();
    todayDate = dd + "-" + mm + "-" + yyyy;
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setDate(todayDate + "/" + time);
  });
  useEffect(() => {
    loadjs("/assets/js/custom.js", {
      success: function () {
        loadjs.done("bundle");
      },
      error: function () {
        loadjs("/assets/js/custom.js", {
          success: function () {
            loadjs.done("bundle");
          },
        });
      },
    });
  });

  useEffect(() => {
    axios.get(`${env.host}/api/get/info`).then((result) => {
      setData(result.data);
    });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sentMessage = () => {
    if (!inputs.username) {
      setUsernameError(true);
      setEmailError(false);
      setEmailFormatError(false);
      setPhoneError(false);
      usernameRef.current.focus();
    } else if (!inputs.email) {
      setEmailError(true);
      setUsernameError(false);
      setEmailFormatError(false);
      setPhoneError(false);
      emailRef.current.focus();
    } else if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(
        inputs.email
      )
    ) {
      setEmailFormatError(true);
      setEmailError(false);
      setUsernameError(false);
      setPhoneError(false);
      emailRef.current.focus();
    } else if (!inputs.phone) {
      setUsernameError(false);
      setEmailError(false);
      setEmailFormatError(false);
      setPhoneError(true);
      phoneRef.current.focus();
    } else if (!inputs.message) {
      setMessageError(true);
      setUsernameError(false);
      setEmailError(false);
      setEmailFormatError(false);
      setPhoneError(false);
      messageRef.current.focus();
    } else if (verified != true) {
      alert("Please check google captcha");
    } else {
      setMessageError(false);
      setUsernameError(false);
      setEmailError(false);
      setEmailFormatError(false);
      setPhoneError(false);
      setSpinner(true);
      window.scrollTo(0, 0);
      document.body.classList.add("append__body");

      axios
        .post(`${env.host}/api/contacts`, {
          username: inputs.username,
          email: inputs.email,
          phone: inputs.phone,
          message: inputs.message,
          date: date,
        })
        .then((res) => {
          setSpinner(false);
          document.body.classList.remove("append__body");
          if (res.data.message) {
            Swal.fire("გილოცავთ!", "თქვენი წერილი გაიგზავნა!", "success").then(
              () => {
                window.location.reload();
              }
            );
          } else {
            Swal.fire({
              icon: "error",
              title: "უფს...",
              text: "დაფიქსირდა შეცდომა!",
            });
          }
        });
    }
  };
  return (
    <>
      <Helmet>
        <title>{t("HELMET__CONTACT")}</title>
      </Helmet>
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
      <Navbar />
      <div style={{ position: "relative" }}>
        <div
          className="partners__slider__container"
          style={{ height: "424px" }}
        >
          <h3
            style={{ textAlign: "center", fontFamily: "BPG Mrgvlovani Caps" }}
          >
            {t("CONTACT")}
          </h3>
          <span className="partners__slider__linker__container">
            <Link
              className="partners__slider__linker"
              style={{ fontFamily: "BPG Arial" }}
              to="/"
              rel="noreferrer"
            >
              {t("HOME")}
            </Link>
          </span>
        </div>
      </div>
      <section className="contactPages__container">
        <div className="container contactPages__responsiveContainer">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-lg-4">
              <div className="contactPages__content">
                <div className="contactPages__icon">
                  <div className="contactPages__iconHead">
                    <img
                      src="http://epsy.ge/images/icons/telephone.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="contactPages__textContent">
                  <div className="contactPages__textContent__Paragraph">
                    <h5>{data[0]?.title}</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    <a href={`tel:${data[0]?.subTitle}`}>{data[0]?.subTitle}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contactPages__content">
                <div className="contactPages__icon">
                  <div className="contactPages__iconHead">
                    <img src="http://epsy.ge/images/icons/mail.svg" alt="" />
                  </div>
                </div>
                <div className="contactPages__textContent">
                  <div className="contactPages__textContent__Paragraph">
                    <h5>{data[1]?.title}</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    <a href={`mailto:${data[1]?.subTitle}`}>
                      {data[1]?.subTitle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contactPages__content">
                <div className="contactPages__icon">
                  <div className="contactPages__iconHead">
                    <img
                      src="http://epsy.ge/images/icons/placeholder2.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="contactPages__textContent">
                  <div className="contactPages__textContent__Paragraph">
                    <h5>{data[2]?.title}</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    {data[2]?.subTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section colored" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title helvetica:bold">
                  {t("LETUSKNOW")}
                </h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p style={{ fontFamily: "BPG Arial" }}>{t("HELMET__HOME")}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-8 col-md-6 col-sm-12"
              style={{ margin: "auto" }}
            >
              <div className="contact-form">
                <form id="contact" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          type="text"
                          name="username"
                          className="form-control helvetica:bold"
                          ref={usernameRef}
                          value={inputs.username}
                          onChange={handleChange}
                          placeholder={`${t("FULLNAME")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        />
                        {usernameError && (
                          <div className="error__div__container">
                            <span className="error__div__container__span">
                              {t("REQUIREDINPUT")}
                            </span>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          ref={emailRef}
                          value={inputs.email}
                          onChange={handleChange}
                          className="form-control helvetica:bold"
                          placeholder={`${t("EMAIL")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        />
                        {emailError && (
                          <div className="error__div__container">
                            <span className="error__div__container__span">
                              {t("REQUIREDINPUT")}
                            </span>
                          </div>
                        )}
                        {emailFormatError && (
                          <div className="error__div__container">
                            <span className="error__div__container__span">
                              {t("WRONGVALIDATION")}
                            </span>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="text"
                          className="form-control helvetica:bold"
                          ref={phoneRef}
                          value={inputs.phone}
                          onChange={handleChange}
                          placeholder={`${t("PHONEINPUT")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        />
                        {phoneError && (
                          <div className="error__div__container">
                            <span className="error__div__container__span">
                              {t("REQUIREDINPUT")}
                            </span>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          ref={messageRef}
                          value={inputs.message}
                          onChange={handleChange}
                          rows="6"
                          className="form-control helvetica:bold"
                          placeholder={`${t("MESSAGE")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        ></textarea>
                        {messageError && (
                          <div className="error__div__container">
                            <span className="error__div__container__span">
                              {t("REQUIREDINPUT")}
                            </span>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    <div className="col-lg-12" style={{ marginBottom: "30px" }}>
                      <Recaptcha
                        sitekey="6LcaWyAcAAAAAJey3_YxXhmjoU7d_ACvJ6AaepwZ"
                        render="explicit"
                        verifyCallback={verifyCallback}
                        onloadCallback={recaptchaLoaded}
                      />
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                          style={{ fontFamily: "BPG Arial" }}
                          onClick={() => sentMessage()}
                        >
                          {t("SENT")}
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

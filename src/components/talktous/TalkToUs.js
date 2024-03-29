import React, { useState, useRef, useEffect } from "react";
import "./TalkToUs.css";
import axios from "axios";
import env from "../../application/environment/env.json";
import Swal from "sweetalert2";
import Recaptcha from "react-recaptcha";
import { useTranslation } from "react-i18next";

export default function TalkToUs() {
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
    fullName: "",
    email: "",
    message: "",
  });
  const [fullNameError, setFullNameError] = useState(false);
  const fullNameRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const emailRef = useRef();
  const [messageError, setMessageError] = useState(false);
  const [date, setDate] = useState("");
  const [verified, setVerified] = useState(false);
  const messageRef = useRef();
  useEffect(() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = dd + "-" + mm + "-" + yyyy;
    setDate(today);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const identification = () => {
    if (!inputs.fullName) {
      setFullNameError(true);
      setEmailError(false);
      setMessageError(false);
      setEmailFormatError(false);
      fullNameRef.current.focus();
    } else if (!inputs.email) {
      setEmailError(true);
      setFullNameError(false);
      setMessageError(false);
      setEmailFormatError(false);
      emailRef.current.focus();
    } else if (
      !/([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g.test(
        inputs.email
      )
    ) {
      setEmailError(false);
      setEmailFormatError(true);
      setFullNameError(false);
      setMessageError(false);
      emailRef.current.focus();
    } else if (!inputs.message) {
      setFullNameError(false);
      setEmailFormatError(false);
      setEmailError(false);
      setMessageError(true);
      messageRef.current.focus();
    } else if (verified != true) {
      alert("Please check google captcha");
    } else {
      setFullNameError(false);
      setEmailFormatError(false);
      setEmailError(false);
      setMessageError(false);
      setSpinner(true);
      window.scrollTo(0, 0);
      document.body.classList.add("append__body");
      inputs.fullName = "";
      inputs.email = "";
      inputs.message = "";
      axios
        .post(`${env.host}/api/reports`, {
          fullName: inputs.fullName,
          email: inputs.email,
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
      <section className="section colored" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title helvetica:bold">
                  {t("WRITETOUS")}
                </h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p style={{ fontFamily: "BPG Arial" }}>
                  {t("SENTMESSAGEERROR")}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5
                className="margin-bottom-30"
                style={{ fontFamily: "BPG Arial", fontSize: "16px" }}
              >
                {t("INPUTINFORMATION")}
              </h5>
              <div className="contact-text">
                <p style={{ fontFamily: "BPG Arial" }}>
                  {t("INPUTINFORMATIONSECOND")}
                </p>
                <p style={{ fontFamily: "BPG Arial" }}>
                  {t("INPUTINFORMATIONTHIRD")}
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="fullName"
                          ref={fullNameRef}
                          value={inputs.fullName}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder={`${t("FULLNAME")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        />
                      </fieldset>
                      {fullNameError && (
                        <div className="error__div__container">
                          <span className="error__div__container__span">
                            {t("REQUIREDINPUT")}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          ref={emailRef}
                          value={inputs.email}
                          onChange={handleChange}
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder={`${t("EMAIL")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        />
                      </fieldset>
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
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          ref={messageRef}
                          rows="6"
                          value={inputs.message}
                          onChange={handleChange}
                          className="form-control"
                          id="message"
                          placeholder={`${t("MESSAGE")}`}
                          required=""
                          style={{ fontSize: "12px", fontFamily: "BPG Arial" }}
                        ></textarea>
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
                          onClick={() => identification()}
                          id="form-submit"
                          className="main-button"
                          style={{fontFamily: "BPG Arial"}}
                        >
                          {t("SENT")}
                        </button>
                      </fieldset>
                      {messageError && (
                        <div className="error__div__container big__error__container">
                          <span className="error__div__container__span">
                            {t("REQUIREDINPUT")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

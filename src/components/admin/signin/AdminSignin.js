import React, { useRef, useState, useEffect } from "react";
import "./AdminSignin.css";
import env from "../../../application/environment/env.json";
import axios from "axios";
import Swal from "sweetalert2";
import { loadjsUtils } from "../../../pages/events/detail/utils/loadjs";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AdminSignin() {
  useEffect(() => {
    loadjsUtils();
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const emailRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [ip, setIp] = useState("");
  useEffect(() => {
    getIPs().then((res) => setIp(res[0]));
  });
  const identificationButton = () => {
    if (!email) {
      setEmailError(true);
      emailRef.current.focus();
      setPasswordError(false);
    } else if (!password) {
      setPasswordError(true);
      passwordRef.current.focus();
      setEmailError(false);
    } else {
      setPasswordError(false);
      setEmailError(false);
      setSpinner(true);
      document.body.classList.add("append__body");
      window.scrollTo(0, 0);

      axios
        .post(`${env.host}/api/signin`, {
          email,
          password,
          ip,
        })
        .then((res) => {
          if (!res.data.success) {
            setSpinner(false);
            document.body.classList.remove("append__body");
            Swal.fire({
              icon: "error",
              title: "უფს...",
              text: `${res.data.message}`,
            });
          } else {
            setSpinner(false);
            document.body.classList.remove("append__body");
            Swal.fire(
              "გილოცავთ!",
              "თქვენ წარმატებით გაიარეთ ავტორიზაცია!",
              "success"
            ).then(() => {
              window.location.reload();
            });
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("logged", true);
            localStorage.setItem("header", res.data.user.access_token);
          }
        });
    }
  };
  return (
    <>
      <Helmet>
        <title>
          ადმინისტრატორით შესვლა - ფსიქოლოგიური საკონსულტაციო ცენტრების
          სტუდენტებისთვის
        </title>
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
      <div className="form__admin__containerBody">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form__admin__container helvetica:regular"
        >
          <h2 className="form__admin__title">შესვლა ადმინისტრატორით</h2>
          <div className="position:relative">
            <input
              type="text"
              ref={emailRef}
              autoFocus
              className={
                emailError
                  ? "form__admin__input form__admin__input__error"
                  : "form__admin__input"
              }
              placeholder="ელექტრონული ფოსტა"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {emailError && (
              <small className="form__admin__errorLabel">
                შეიყვანეთ ელექტრონული ფოსტა
              </small>
            )}
          </div>
          <div className="position:relative">
            <input
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              className={
                passwordError
                  ? "form__admin__input form__admin__input__error"
                  : "form__admin__input"
              }
              placeholder="პაროლი"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {passwordError && (
              <small className="form__admin__errorLabel">
                შეიყვანეთ პაროლი
              </small>
            )}
            <div
              className={
                showPassword
                  ? "form__admin__passwordEye form__admin__passwordShowEye"
                  : "form__admin__passwordEye form__admin__passwordHideEye"
              }
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            ></div>
          </div>
          <div>
            <button
              className="form__admin__button"
              type="submit"
              onClick={() => identificationButton()}
            >
              შესვლა
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

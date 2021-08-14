import React, { useState, useRef } from "react";
import "./TalkToUs.css";
import axios from "axios";
import env from "../../application/environment/env.json";
import Swal from "sweetalert2";

export default function TalkToUs() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [fullNameError, setFullNameError] = useState(false);
  const fullNameRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const emailRef = useRef();
  const [messageError, setMessageError] = useState(false);
  const messageRef = useRef();
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
    } else {
      setFullNameError(false);
      setEmailFormatError(false);
      setEmailError(false);
      setMessageError(false);

      axios
        .post(`${env.host}/api/reports`, {
          fullName: inputs.fullName,
          email: inputs.email,
          message: inputs.message,
          date: "06-08-2021",
        })
        .then((res) => {
          if (res.data.message) {
            Swal.fire("გილოცავთ!", "თქვენი წერილი გაიგზავნა!", "success");
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
                <h2 className="section-title helvetica:bold">მოგვწერეთ</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p className="helvetica:bold">
                  თუ გაქვთ პრობლემა, მოგვწერეთ პრობლემის შესახებ
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5
                className="margin-bottom-30 helvetica:bold"
                style={{ fontSize: "16px" }}
              >
                შეიყვანეთ ინფორმაცია
              </h5>
              <div className="contact-text">
                <p className="helvetica:bold">
                  აუცილებელია ყველა ველის შევსება რათა გამოიგზავნოს ჩვენთან
                  თქვენი შეტყობინება
                </p>
                <p className="helvetica:bold">
                  შეიყვანეთ შეტყობინებაში პრობლემის აღწერა რათა შევძლოთ
                  აღმოფხვრა
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
                          className="form-control helvetica:bold"
                          id="name"
                          placeholder="სახელი გვარი"
                          required=""
                          style={{ fontSize: "12px" }}
                        />
                      </fieldset>
                      {fullNameError && (
                        <div className="error__div__container">
                          <span className="error__div__container__span">
                            სავალდებულო ველი
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
                          className="form-control helvetica:bold"
                          id="email"
                          placeholder="ელექტრონული ფოსტა"
                          required=""
                          style={{ fontSize: "12px" }}
                        />
                      </fieldset>
                      {emailError && (
                        <div className="error__div__container">
                          <span className="error__div__container__span">
                            სავალდებულო ველი
                          </span>
                        </div>
                      )}
                      {emailFormatError && (
                        <div className="error__div__container">
                          <span className="error__div__container__span">
                            არასწორი ვალიდაცია
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
                          className="form-control helvetica:bold"
                          id="message"
                          placeholder="შეტყობინება"
                          required=""
                          style={{ fontSize: "12px" }}
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          onClick={() => identification()}
                          id="form-submit"
                          className="main-button helvetica:bold"
                        >
                          გაგზავნა
                        </button>
                      </fieldset>
                      {messageError && (
                        <div className="error__div__container big__error__container">
                          <span className="error__div__container__span">
                            სავალდებულო ველი
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

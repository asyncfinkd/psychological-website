import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./ContactPages.css";
import Footer from "../../components/footer/Footer";
import loadjs from "loadjs";
import { Helmet } from "react-helmet";

export default function ContactPages() {
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

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>
          კონტაქტი - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის
        </title>
      </Helmet>
      <Navbar />
      <div style={{ position: "relative" }}>
        <div
          className="partners__slider__container"
          style={{ height: "424px" }}
        >
          <h3
            style={{ textAlign: "center", fontFamily: "BPG Mrgvlovani Caps" }}
          >
            კონტაქტი
          </h3>
          <span className="partners__slider__linker__container">
            <Link className="partners__slider__linker" to="/" rel="noreferrer">
              მთავარი
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
                    <h5>ტელეფონი:</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    <a href="tel:+995 42 2 271 786">+995 42 2 271 786</a>
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
                    <h5>ელ.ფოსტა:</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    <a href="mailto:info@bsu.edu.ge">info@bsu.edu.ge</a>
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
                    <h5>მისამართი:</h5>
                  </div>
                  <div className="contactPages__textContent__Description">
                    რუსთაველის/ნინოშვილის ქ. 32/35
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
                <h2 className="section-title helvetica:bold">შეგვეხმიანეთ</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p className="helvetica:bold">
                  ფსიქოლოგიური საკონსულტაციო ცენტრები სტუდენტებისთვის
                </p>
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
                          name="fullName"
                          type="text"
                          className="form-control helvetica:bold"
                          id="name"
                          placeholder="სახელი გვარი"
                          required=""
                          style={{ fontSize: "12px" }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className="form-control helvetica:bold"
                          id="email"
                          placeholder="ელექტრონული ფოსტა"
                          required=""
                          style={{ fontSize: "12px" }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className="form-control helvetica:bold"
                          id="email"
                          placeholder="ტელეფონი"
                          required=""
                          style={{ fontSize: "12px" }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
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
                          id="form-submit"
                          className="main-button helvetica:bold"
                        >
                          გაგზავნა
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

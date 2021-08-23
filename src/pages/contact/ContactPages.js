import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./ContactPages.css";

export default function ContactPages() {
  return (
    <>
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
    </>
  );
}

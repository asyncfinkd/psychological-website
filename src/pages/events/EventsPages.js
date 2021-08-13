import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";

export default function EventsPages() {
  return (
    <>
      <Helmet>
        <title>
        ღონისძიებები - ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის
        </title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>ღონისძიებები</h3>
        <span className="partners__slider__linker__container">
          <Link
            className="partners__slider__linker"
            onClick={() => {
              window.location.href = "/";
            }}
            rel="noreferrer"
          >
            მთავარი
          </Link>
          <span className="partners__slider__linker__animation"></span>
          <a
            className="partners__slider__linker active__partners__slider__linker"
            href="https://google.com"
            rel="noreferrer"
          >
            ღონისძიებები
          </a>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
    </>
  );
}

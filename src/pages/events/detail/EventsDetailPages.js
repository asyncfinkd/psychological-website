import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { EventsContext } from "../../../context/events/EventsContext";

export default function EventsDetailPages({ match }) {
  const { events, setEvents } = useContext(EventsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    events.map((item) => {
      if (item.route === match.params.id) {
        setData(item);
      }
    });
  });
  return (
    <>
      <Navbar />
      <div
        className="partners__slider__container"
        style={{
          background: `url(${data.image}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <h3 style={{ textAlign: "center", fontFamily: "BPG Mrgvlovani Caps" }}>
          {data.title}
        </h3>
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
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <h5>2021-2-05</h5>
                <h3 className="about__title__container">{data.title}</h3>
                <div className="about__title__div">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="about__title__p"></p>
            <p className="about__title__p helvetica:medium color:gray">
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <Footer />
    </>
  );
}

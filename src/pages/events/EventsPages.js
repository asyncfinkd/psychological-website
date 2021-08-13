import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import { EventsContext } from "../../context/events/EventsContext";

export default function EventsPages() {
  const { events, setEvents } = useContext(EventsContext);
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
      <div className="container">
        <div className="row">
          {events.map((item, i) => {
            const { title, description, image, route } = item;
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src={image} alt="" />
                    </div>
                    <div className="blog-content">
                      <h3>
                        <Link to={`/${route}`}>{title}</Link>
                      </h3>
                      <div
                        className="text"
                        style={{
                          maxHeight: "75px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {description}
                      </div>
                      <Link
                        to={`/${route}`}
                        className="main-button"
                        style={{ fontFamily: "BPG Mrgvlovani Caps" }}
                      >
                        დაწვრილებით
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";
import { Link } from "react-router-dom";
import env from "../../application/environment/env.json";
import { useTranslation } from "react-i18next";

export default function Events() {
  const {t} = useTranslation();
  const { events, setEvents } = useContext(EventsContext);
  return (
    <>
      <div className="row">
        {events.length < 1 ? (
          <>
            <p
              className="admin__wrapper__txt__Message"
              style={{ margin: "auto" }}
            >
              {t("NEWSERROR")}
            </p>
          </>
        ) : (
          <>
            {events.slice(0, 3).map((item, i) => {
              const { title, description, image, route } = item;
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                    <div className="blog-post-thumb">
                      <div className="img">
                        <img
                          src={`${env.host}/public/${image}`}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          alt=""
                        />
                      </div>
                      <div className="blog-content">
                        <h3
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "BPG Mrgvlovani Caps",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Link
                            to={`/events/${route}/${localStorage.getItem("lang")}`}
                            style={{ height: "50px" }}
                          >
                            {title}
                          </Link>
                        </h3>
                        <div
                          className="text"
                          style={{
                            maxHeight: "75px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontFamily: "BPG Mrgvlovani Caps",
                          }}
                        >
                          {description}
                        </div>
                        <Link
                          to={`/events/${route}`}
                          className="main-button"
                          style={{ fontFamily: "BPG Mrgvlovani Caps" }}
                        >
                          {t("READMORE")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

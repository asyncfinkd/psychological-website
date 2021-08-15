import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";
import { Link } from "react-router-dom";
import env from "../../application/environment/env.json";

export default function Events() {
  const { events, setEvents } = useContext(EventsContext);
  return (
    <>
      <div className="row">
        {events.slice(0, 3).map((item, i) => {
          const { title, description, image, route } = item;
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={`${env.host}/public/${image}`} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Link to={`/events/${route}`}>
                        {title.length < 116
                          ? `${title.substr(0, 53)}...`
                          : title.substr(0, 53)}
                      </Link>
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
                      to={`/events/${route}`}
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
    </>
  );
}

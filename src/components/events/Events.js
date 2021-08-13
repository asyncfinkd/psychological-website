import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";
import { Link } from "react-router-dom";

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
                    <img src={image} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <Link to={`/events/${route}`}>{title}</Link>
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

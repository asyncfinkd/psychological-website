import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";

export default function Events() {
  const { events, setEvents } = useContext(EventsContext);
  return (
    <>
      <div className="row">
        {events.map((item, i) => {
          const { title, description, image } = item;
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                <div className="blog-post-thumb">
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="blog-content">
                    <h3>
                      <a href="#test">{title}</a>
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
                    <a href="#test" className="main-button">
                      Read More
                    </a>
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

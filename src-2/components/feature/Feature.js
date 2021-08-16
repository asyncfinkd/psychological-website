import React, { useContext } from "react";
import {EventsContext} from "../../context/events/EventsContext";

export default function Feature() {
  const { abouts, setAbouts } = useContext(EventsContext);
  return (
    <>
      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {abouts.map((item, i) => {
                  const { title, description } = item;
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="features-small-item">
                        <div className="icon">
                          <i>
                            <img src="assets/images/featured-item-01.png" alt="" />
                          </i>
                        </div>
                        <h5 className="features-title helvetica:medium">
                          {title}
                        </h5>
                        <p className="helvetica:regular">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

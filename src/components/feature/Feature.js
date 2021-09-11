import React, { useContext } from "react";
import { EventsContext } from "../../context/events/EventsContext";

export default function Feature() {
  const { abouts, setAbouts } = useContext(EventsContext);
  const renderWithProps = (firstCondition, secondCondition) => {
    const local = localStorage.getItem("lang");
    if (local == "en") {
      return firstCondition;
    } else {
      return secondCondition;
    }
  };
  return (
    <>
      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {abouts.map((item, i) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="features-small-item">
                        <div className="icon">
                          <i>
                            <img
                              src="assets/images/featured-item-01.png"
                              alt=""
                            />
                          </i>
                        </div>
                        <h5 className="features-title helvetica:medium">
                          {renderWithProps(item.en[0].title, item.ge[0].title)}
                        </h5>
                        <p className="helvetica:regular">
                          {renderWithProps(
                            item.en[0].description,
                            item.ge[0].description
                          )}
                        </p>
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

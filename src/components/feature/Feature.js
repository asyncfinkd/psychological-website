import React from "react";
import { FeatureFixtures } from "../../fixtures/feature/FeatureFixtures";

export default function Feature() {
  return (
    <>
      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {FeatureFixtures.map((item, i) => {
                  const { image, title, text } = item;
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                      key={i}
                    >
                      <div className="features-small-item">
                        <div className="icon">
                          <i>
                            <img src={image} alt="" />
                          </i>
                        </div>
                        <h5 className="features-title">{title}</h5>
                        <p>{text}</p>
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

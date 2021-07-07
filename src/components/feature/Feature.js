import React from "react";
import { FeatureFixtures } from "../../fixtures/feature/FeatureFixtures";

export default function Feature() {
  return (
    <>
      <section class="section home-feature">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                {FeatureFixtures.map((item, i) => {
                  const { image, title, text } = item;
                  return (
                    <div
                      class="col-lg-4 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                      key={i}
                    >
                      <div class="features-small-item">
                        <div class="icon">
                          <i>
                            <img src={image} alt="" />
                          </i>
                        </div>
                        <h5 class="features-title">{title}</h5>
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

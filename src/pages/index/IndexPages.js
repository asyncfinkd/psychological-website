import loadjs from "loadjs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TalkToUs from "../../components/talktous/TalkToUs";
import { Helmet } from "react-helmet";
import Events from "../../components/events/Events";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PartnersSlider from "../../components/partners/slider/PartnersSlider";
import { useTranslation } from "react-i18next";

export default function IndexPages() {
  const {t} = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [dd, setDd] = useState(1);
  const [ddVar, setDdVar] = useState();

  useEffect(() => {
    loadjs("/assets/js/custom.js", {
      before: function (path, el) {
        el.integrity = "xxxx";
        el.crossOrigin = "anonymous";
      },
      success: function () {
        loadjs.done("bundle");
      },
      error: function (pathsNotFound) {
        loadjs("/assets/js/custom.js", {
          success: function () {
            loadjs.done("bundle");
          },
        });
      },
    });
  });
  return (
    <>
      <Helmet>
        <title>ფსიქოლოგიური საკონსულტაციო ცენტრების სტუდენტებისთვის</title>
      </Helmet>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          showThumbs={false}
          showArrows={false}
          interval={5000}
        >
          <div class="welcome-area" id="welcome">
            <div class="header-text">
              <div class="container">
                <div class="row">
                  <div
                    class="offset-xl-3 col-xl-12 offset-lg-2 col-lg-8 col-md-12 col-sm-12"
                    style={{ margin: "auto" }}
                  >
                    <h1
                      className="helvetica:medium"
                      style={{ fontSize: "25px", lineHeight: "1.5" }}
                    >
                      <span>
                        {t("CAROUSELTEXT")}{" "}
                      </span>
                      <span>
                      {t("CAROUSELTEXT2")}
                      </span>
                    </h1>
                    <a
                      href="#features"
                      class="main-button-slider helvetica:medium"
                    >
                      {t("DISCOVERMORE")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="welcome-area welcome-area__2" id="welcome">
            <div class="header-text">
              <div class="container">
                <div class="row">
                  <div
                    class="offset-xl-3 col-xl-12 offset-lg-2 col-lg-8 col-md-12 col-sm-12"
                    style={{ margin: "auto" }}
                  >
                    <h1
                      className="helvetica:medium"
                      style={{ fontSize: "25px", lineHeight: "1.5" }}
                    >
                     <span>
                        {t("CAROUSELTEXT")}{" "}
                      </span>
                      <span>
                      {t("CAROUSELTEXT2")}
                      </span>
                    </h1>
                    <a
                      href="#features"
                      class="main-button-slider helvetica:medium"
                    >
                      {t("DISCOVERMORE")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="welcome-area welcome-area__3" id="welcome">
            <div class="header-text">
              <div class="container">
                <div class="row">
                  <div
                    class="offset-xl-3 col-xl-12 offset-lg-2 col-lg-8 col-md-12 col-sm-12"
                    style={{ margin: "auto" }}
                  >
                    <h1
                      className="helvetica:medium"
                      style={{ fontSize: "25px", lineHeight: "1.5" }}
                    >
                      <span>
                        {t("CAROUSELTEXT")}{" "}
                      </span>
                      <span>
                      {t("CAROUSELTEXT2")}
                      </span>
                    </h1>
                    <a
                      href="#features"
                      class="main-button-slider helvetica:medium"
                    >
                      {t("DISCOVERMORE")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <Feature />
      {/* <ProjectInfo /> */}

      {/* <section class="mini" id="work-process">
        <div class="mini-content">
          <div class="container">
            <div class="row">
              <div class="offset-lg-3 col-lg-6">
                <div class="info">
                  <h1>Work Process</h1>
                  <p>
                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in
                    imperdiet interdum, vehicula ut ex. Donec ante diam.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#test" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Launch</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="section" id="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2
                  class="section-title"
                  style={{ fontFamily: "BPG Mrgvlovani Caps" }}
                >
                  სიახლეები
                </h2>
              </div>
            </div>
          </div>

          <Events />
        </div>
      </section>
      <PartnersSlider />

      <TalkToUs />
      <Footer />
    </>
  );
}

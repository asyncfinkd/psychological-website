import loadjs from "loadjs";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import TalkToUs from "../../components/talktous/TalkToUs";
import { Helmet } from "react-helmet";
import Events from "../../components/events/Events";
import ProjectInfo from "../../components/projectinfo/ProjectInfo";

export default function IndexPages() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [dd, setDd] = useState(1);
  const [ddVar, setDdVar] = useState();

  useEffect(() => {
    const WelcomeArea = document.getElementById("welcome");
    setTimeout(() => {
      if (dd === 1) {
        setDdVar(false);
        if (ddVar) {
          WelcomeArea.style.background = "url('assets/images/3.jpg')";
          WelcomeArea.style.backgroundRepeat = "no-repeat";
          WelcomeArea.style.backgroundPosition = "center center";
          WelcomeArea.style.backgroundSize = "cover";
        }
        setDd(2);
      } else if (dd === 2) {
        WelcomeArea.style.background = "url('assets/images/2.jpg')";
        WelcomeArea.style.backgroundRepeat = "no-repeat";
        WelcomeArea.style.backgroundPosition = "center center";
        WelcomeArea.style.backgroundSize = "cover";
        setDd(3);
        setDdVar(true);
      } else {
        WelcomeArea.style.background = "url('assets/images/1.jpg')";
        WelcomeArea.style.backgroundRepeat = "no-repeat";
        WelcomeArea.style.backgroundPosition = "center center";
        WelcomeArea.style.backgroundSize = "cover";
        setDd(1);
      }
    }, 5000);
  });
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
                    ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის{" "}
                  </span>
                  <span>
                    საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში
                  </span>
                </h1>
                <a href="#features" class="main-button-slider helvetica:medium">
                  აღმოაჩინე მეტი
                </a>
              </div>
            </div>
          </div>
        </div>
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
                <h2 class="section-title">Blog Entries</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Integer molestie aliquam gravida. Nullam nec arcu finibus,
                  imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                  molestie.
                </p>
              </div>
            </div>
          </div>

          <Events />
        </div>
      </section>
      <TalkToUs />
      <Footer />
    </>
  );
}

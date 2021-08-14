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
      <div style={{ marginBottom: "3rem" }}></div>
      <ProjectInfo />
      <div style={{ marginBottom: "6rem" }}></div>

      <section class="mini" id="work-process">
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
      </section>

      <section class="section" id="testimonials">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">What do they say?</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec tempus, sem non rutrum imperdiet, lectus orci fringilla
                  nulla, at accumsan elit eros a turpis. Ut sagittis lectus
                  libero.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis,
                    egestas scelerisque orci. Maecenas a finibus odio.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Catherine Soft</h3>
                    <span>Managing Director</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Integer molestie aliquam gravida. Nullam nec arcu finibus,
                    imperdiet nulla vitae, placerat nibh. Cras maximus venenatis
                    molestie.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">Kelvin Wood</h3>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="team-item">
                <div class="team-content">
                  <i>
                    <img src="assets/images/testimonial-icon.png" alt="" />
                  </i>
                  <p>
                    Quisque diam odio, maximus ac consectetur eu, auctor non
                    lorem. Cras quis est non ante ultrices molestie. Ut vehicula
                    et diam at aliquam.
                  </p>
                  <div class="user-image">
                    <img src="http://placehold.it/60x60" alt="" />
                  </div>
                  <div class="team-info">
                    <h3 class="user-name">David Martin</h3>
                    <span>Website Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>126</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-top">
                  <strong>63</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item decoration-bottom">
                  <strong>18</strong>
                  <span>Awards Wins</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="count-item">
                  <strong>27</strong>
                  <span>Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

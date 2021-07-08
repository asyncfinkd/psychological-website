import React from "react";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div id="preloader">
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <Navbar />

      <div class="welcome-area" id="welcome">
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1
                  className="helvetica:medium"
                  style={{ fontSize: "25px", lineHeight: "1.5" }}
                >
                  ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის
                  საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში
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

      <section class="section padding-top-70 padding-bottom-0" id="features">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/left-image.png"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div class="left-heading">
                <h2 class="section-title">Let’s discuss about you project</h2>
              </div>
              <div class="left-text">
                <p>
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                  blandit, at finibus leo efficitur. Nam gravida purus non
                  sapien auctor, ut aliquam magna ullamcorper.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section padding-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div class="left-heading">
                <h2 class="section-title">
                  We can help you to grow your business
                </h2>
              </div>
              <div class="left-text">
                <p>
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                  nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                  luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam
                  quis dolor elit.
                </p>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div
              class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/right-image.png"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>

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
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Get Ideas</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Sketch Up</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Discuss</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Revise</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
                  <i>
                    <img src="assets/images/work-process-item-01.png" alt="" />
                  </i>
                  <strong>Approve</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" class="mini-box">
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

      <section class="section colored" id="pricing-plans">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Pricing Plans</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
            >
              <div class="pricing-item">
                <div class="pricing-header">
                  <h3 class="pricing-title">Starter</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">14.50</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">60 GB space</li>
                    <li class="active">600 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li>15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
            >
              <div class="pricing-item active">
                <div class="pricing-header">
                  <h3 class="pricing-title">Premium</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">21.50</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">120 GB space</li>
                    <li class="active">1200 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li class="active">15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 col-sm-12"
              data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
            >
              <div class="pricing-item">
                <div class="pricing-header">
                  <h3 class="pricing-title">Advanced</h3>
                </div>
                <div class="pricing-body">
                  <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">42.00</span>
                    <span class="period">monthly</span>
                  </div>
                  <ul class="list">
                    <li class="active">250 GB space</li>
                    <li class="active">5000 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li class="active">15-minute support</li>
                    <li class="active">Unlimited Emails</li>
                    <li class="active">24/7 Security</li>
                  </ul>
                </div>
                <div class="pricing-footer">
                  <a href="#" class="main-button">
                    Purchase Now
                  </a>
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

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="assets/images/blog-item-01.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Vivamus ac vehicula dui</a>
                  </h3>
                  <div class="text">
                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id.
                    Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam
                    egestas augue.
                  </div>
                  <a href="#" class="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="assets/images/blog-item-02.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Phasellus convallis augue</a>
                  </h3>
                  <div class="text">
                    Aliquam commodo ornare nisl, et scelerisque nisl dignissim
                    ac. Vestibulum finibus urna ut velit venenatis, vel ultrices
                    sapien mattis.
                  </div>
                  <a href="#" class="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="blog-post-thumb">
                <div class="img">
                  <img src="assets/images/blog-item-03.png" alt="" />
                </div>
                <div class="blog-content">
                  <h3>
                    <a href="#">Nam gravida purus non</a>
                  </h3>
                  <div class="text">
                    Maecenas eu erat vitae dui convallis consequat vel gravida
                    nulla. Vestibulum finibus euismod odio, ut tempus enim
                    varius eu.
                  </div>
                  <a href="#" class="main-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section colored" id="contact-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="center-heading">
                <h2 class="section-title">Talk To Us</h2>
              </div>
            </div>
            <div class="offset-lg-3 col-lg-6">
              <div class="center-text">
                <p>
                  Maecenas pellentesque ante faucibus lectus vulputate
                  sollicitudin. Cras feugiat hendrerit semper.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h5 class="margin-bottom-30">Keep in touch</h5>
              <div class="contact-text">
                <p>
                  110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                  <br />
                  auctor non lorem
                </p>
                <p>
                  You are NOT allowed to re-distribute Softy Pinko template on
                  any template collection websites. Thank you.
                </p>
              </div>
            </div>

            <div class="col-lg-8 col-md-6 col-sm-12">
              <div class="contact-form">
                <form id="contact" action="" method="get">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          class="main-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;

import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  <img src="assets/images/logo.png" alt="Softy Pinko" />
                </a>
                <ul className="nav">
                  <li>
                    <a href="#welcome" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features">About</a>
                  </li>
                  <li>
                    <a href="#work-process">Work Process</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#pricing-plans">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="#blog">Blog Entries</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

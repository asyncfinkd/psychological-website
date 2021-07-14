import React from "react";
import { NavbarFixtures } from "../../fixtures/navbar/NavbarFixtures";
import Image from "../../assets/images/logo_2.png";
import Image2 from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#index.html" className="logo">
                  <img src={Image} alt="" style={{ marginTop: "-15px" }} />
                  <img
                    src={Image2}
                    alt=""
                    className="navbar__image__responsive"
                    style={{ marginTop: "-18px" }}
                  />
                </a>
                <ul className="nav">
                  {NavbarFixtures.map((item, i) => {
                    const { text, link } = item;
                    return (
                      <>
                        <li key={i}>
                          {link === "/" ? (
                            <NavLink
                              to={link}
                              exact
                              className={`helvetica:medium`}
                              activeClassName="active"
                              onClick={() => {
                                window.location.href = "/";
                              }}
                            >
                              {text}
                            </NavLink>
                          ) : (
                            <NavLink
                              to={link}
                              exact
                              className={"helvetica:medium"}
                              activeClassName="active"
                            >
                              {text}
                            </NavLink>
                          )}
                        </li>
                      </>
                    );
                  })}
                </ul>
                <a href="#test" className="menu-trigger">
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

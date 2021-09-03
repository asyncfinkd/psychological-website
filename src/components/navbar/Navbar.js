import React from "react";
import Image from "../../assets/images/logo_2.png";
import Image2 from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <header
        className="header-area header-sticky header__respo"
        style={{ top: "0px", padding: "0px" }}
      >
        <div className="container" style={{ maxWidth: "100%", padding: "0px" }}>
          <div className="row">
            <div className="col-12">
              <nav className="main-nav" style={{ borderRadius: "0px" }}>
                <a
                  href="https://epsy.ge"
                  target="_blank"
                  rel="noreferrer"
                  className="logo"
                >
                  <img src={Image} alt="" style={{ marginTop: "-15px" }} />
                  <img
                    src={Image2}
                    alt=""
                    className="navbar__image__responsive"
                    style={{ marginTop: "-18px" }}
                  />
                </a>
                <ul className="nav">
                <li>
                          <NavLink
                            to="/"
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {t("HOME")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/about"
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {t("ABOUT")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/events"
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {t("EVENTS")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/partners"
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {t("PARTNERS")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {t("CONTACT")}
                          </NavLink>
                        </li>
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

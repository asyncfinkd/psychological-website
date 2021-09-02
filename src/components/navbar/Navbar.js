import React from "react";
import { NavbarFixtures } from "../../fixtures/navbar/NavbarFixtures";
import Image from "../../assets/images/logo_2.png";
import Image2 from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    localStorage.setItem("lang", language);
    window.location.reload();
  }
  return (
    <>
    <div className="navbar__top__bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6" style={{paddingLeft: "0px"}}>
            <div className="align-items-center justify-content-center justify-content-text-center">
              <div className="navbar__top__bar__contact__item">
                <div className="navbar__top__bar__icon">
                  <img src="https://epsy.ge/images/icons/telephone.svg" alt="" />
                </div>
                <a className="navbar__top__linker" href="tel:+995 42 2 271 786">+995 42 2 271 786</a>
              </div>
              <div className="navbar__top__bar__contact__item sm-hidden">
                <div className="navbar__top__bar__icon">
                  <img src="https://epsy.ge/images/icons/mail.svg" alt="" />
                </div>
                <a className="navbar__top__linker" href="mailto:info@bsu.edu.ge">info@bsu.edu.ge</a>
              </div>
              <div className="navbar__top__bar__contact__item navbar__top__bar__social">
                <ul className="navbar__social__icons__in__top">
                  <li>
                    <a href="#" target="_blank">
                    <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                    <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                    <i class="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="align-items-center justify-content-center text-right justify-content-text-center">
              <div className="navbar__top__bar__contact__item ml-auto sm-hidden">
                <a className="navbar__top__bar__contactItem__linker" href="">სასარგებლო ბმულები</a>
              </div>
              <Link to ="/contact" className="navbar__top__bar__contactItem__linkerContact">
                {t("CONTACT")}
              </Link>
              <div className="navbar__top__bar__contact__item">
                <ul className="navbar__social__icons__in__top menu-lang__navbar__top">
                  <li onClick={() => changeLanguage("en")}>
                    ENG
                  </li>
                  <li onClick={() => changeLanguage("ge")}>
                    GEO
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <header
        className="header-area header-sticky header__respo"
        style={{ top: "45px", padding: "0px" }}
      >
        <div className="container" style={{  padding: "0px" }}>
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
                  {NavbarFixtures.map((item, i) => {
                    const { text, link } = item;
                    return (
                      <>
                        <li key={i}>
                          <NavLink
                            to={link}
                            exact
                            className={"helvetica:medium"}
                            activeClassName="active"
                          >
                            {text}
                          </NavLink>
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

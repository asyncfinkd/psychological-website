import React from "react";
import { NavbarFixtures } from "../../fixtures/navbar/NavbarFixtures";
import Image from "../../assets/images/logo_2.png";

export default function Navbar() {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  <img src={Image} alt="" />
                </a>
                <ul className="nav">
                  {NavbarFixtures.map((item, i) => {
                    const { text, link, active } = item;
                    return (
                      <>
                        <li key={i}>
                          <a
                            href={link}
                            className={`helvetica:medium ${
                              active === true && "active"
                            }`}
                          >
                            {text}
                          </a>
                        </li>
                      </>
                    );
                  })}
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

import React from "react";
import { FooterFixtures } from "../../fixtures/footer/FooterFixtures";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const {t} = useTranslation();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="social">
                {FooterFixtures.map((item, i) => {
                  const { className, link } = item;
                  return (
                    <li key={i}>
                      <a href={link}>
                        <i className={className}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright helvetica:medium">
                {t("FOOTER")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

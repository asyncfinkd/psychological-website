import React from "react";
import { FooterFixtures } from "../../fixtures/footer/FooterFixtures";

export default function Footer() {
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
                ყველა უფლება დაცულია &copy; 2021 - ბათუმის შოთა რუსთაველის
                უნივერსიტეტი
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

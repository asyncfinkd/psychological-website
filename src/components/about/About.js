import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";
import loadjs from "loadjs";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
  useEffect(() => {
    loadjs("/assets/js/custom.js", {
      success: function () {
        loadjs.done("bundle");
      },
      error: function () {
        loadjs("/assets/js/custom.js", {
          success: function () {
            loadjs.done("bundle");
          },
        });
      },
    });
  });

  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>
          პროექტის შესახებ - ფსიქოლოგიური საკონსულტაციო ცენტრების
          სტუდენტებისთვის
        </title>
      </Helmet>
      <Navbar />
      <div className="partners__slider__container">
        <h3>{t("ABOUT")}</h3>
        <span className="partners__slider__linker__container">
          <Link className="partners__slider__linker" to="/" rel="noreferrer">
            {t("HOME")}
          </Link>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <h5>{t("PSYCHOLOGICALTITLE")}</h5>
                <h3 className="about__title__container">
                  {t("PSYCHOLOGICALSUBTITLE")}
                </h3>
                <div className="about__title__div">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="about__title__p"></p>
            <p className="about__title__p helvetica:medium color:gray">
              {t("PSYCHOLOGICALCODE")}
            </p>
            <p className="about__title__p helvetica:medium color:gray">
              <br />
              {t("PSYCHOLOGICALPURPOSE")}
              <br />
              &nbsp; &nbsp; 1. {t("PSYCHOLOGICALFIRSTPURPOSE")}
              <br />
              &nbsp; &nbsp; 2. {t("PSYCHOLOGICALSECONDPURPOSE")}
              <br />
              &nbsp; &nbsp; 3. რეკომენდაციებისა &nbsp;და საკანონმდებლო
              დოკუმენტაციების შემუშავება;
              <br />
              &nbsp; &nbsp; 4. ფსიქიკური ჯანმრთელობის შესახებ სტუდენტებისა და,
              საერთოდ, ფართო აუდიტორიის ცნობიერების ამაღლება;
              <br />
              &nbsp; &nbsp; 5. საქართველოს უნივერსიტეტების ფსიქოლოგიური
              კონსულტაციის ცენტრების ასოციაციის შექმნა.
            </p>
            <p className="about__title__p helvetica:medium color:gray">
              <br />
              პროექტის განხორციელების პერიოდში, პროექტით გათვალისწინებული
              აქტივობების შედეგად, პარტნიორ უმაღლეს სასწავლებლებში და,
              შესაბამისად, მათი განთავსების რეგიონებში (შიდა ქართლში, კახეთში,
              იმერეთში, სამეგრელოში, აჭარაში, სამცხე-ჯავახეთში) გაიზრდება არა
              მხოლოდ სტუდენტთა, აკადემიური და ადმინისტრაციული პერსონალის, არამედ
              უფრო ფართო აუდიტორიის &nbsp;ინფორმირებულობა ფსიქოლოგიური
              მხარდაჭერისა და კონსულტაციის მნიშვნელობის შესახებ (ჩატარდება
              საინფორმაციო კამპანიები, პრესაში გამოქვეყნდება მასალები,
              დაიბეჭდება ფლაერები, შეიქმნება ვებგვერდი და ა.შ.).
            </p>
            <p className="about__title__p helvetica:medium color:gray">
              <br />
              ფსიქოლოგიური კონსულტაციის ცენტრების დაფუძნებით, პროექტში მონაწილე
              უმაღლესი საგანმანათლებლო დაწესებულების სტუდენტები მიიღებენ
              ფსიქოლოგიურ კონსულტაციასა და დახმარებას მათი მოთხოვნის
              შესაბამისად. ამ დახმარებას მათ გაუწევენ ფსიქოლოგები, რომლებიც
              სპეციალიზირებულ ტრენინგებს გაივლიან ბიდგოშისა და ბრაშოვის
              უნივერსიტეტებში, მონაწილეობას მიიღებენ ქართველი და ევროპელი
              სპეციალისტების მიერ ორგანიზებულ ვორქშოფებსა და სემინარებში. ასევე,
              შემუშავდება რეკომენდაციები და საკანონმდებლო დოკუმენტაცია,
              შეიქმნება უნივერსიტეტების ფსიქოლოგიური კონსულტაციის ცენტრების
              ასოციაცია, რაც ხელს შეუწყობს პროექტის შედეგების მდგრადობასა და მის
              სიცოცხლისუნარიანობას.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <Footer />
    </>
  );
}

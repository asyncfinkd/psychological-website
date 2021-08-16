import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";
import loadjs from "loadjs";
import { Helmet } from "react-helmet";

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
        <h3>პროექტის შესახებ</h3>
        <span className="partners__slider__linker__container">
          <Link className="partners__slider__linker" to="/" rel="noreferrer">
            მთავარი
          </Link>
        </span>
      </div>
      <div style={{ marginBottom: "3rem" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about__section__title">
              <div className="about__title__header">
                <h5>ფსიქოლოგიური საკონსულტაციო ცენტრები სტუდენტებისთვის</h5>
                <h3 className="about__title__container">
                  ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის
                  საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY
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
              ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის
              საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY
              (617980-EPP-1-2020-1-GE-EPPKA2-CBHE-SP)
            </p>
            <p className="about__title__p helvetica:medium color:gray">
              <br />
              E-PSY პროექტის (განხორციელების პერიოდი – 2021-2023 წწ.) ზოგადი
              მიზანია სტუდენტებისთვის სოციალური და ფსიქოლოგიური დახმარების
              გაწევა საქართველოს უმაღლეს სასწავლებლებში ფსიქოლოგიური
              კონსულტაციების ცენტრების შექმნის გზით. ზოგადი მიზნიდან
              გამომდინარეობს ხუთი კონკრეტული მიზანი:
              <br />
              &nbsp; &nbsp; 1. ფსიქოლოგიური ცენტრების შექმნა სტუდენტებისთვის
              პარტნიორ უმაღლეს სასწავლებლებში;
              <br />
              &nbsp; &nbsp; 2. პერსონალის მომზადება და გადამზადება;
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

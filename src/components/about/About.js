import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./About.css";

export default function About() {
    return(
        <>
            <Navbar />
        <div className="partners__slider__container">
        <h3>პროექტის შესახებ</h3>
        <span className="partners__slider__linker__container">
          <Link
            className="partners__slider__linker"
            onClick={() => {
              window.location.href = "/";
            }}
            rel="noreferrer"
          >
            მთავარი
          </Link>
          <span className="partners__slider__linker__animation"></span>
          <a
            className="partners__slider__linker active__partners__slider__linker"
            href="https://google.com"
            rel="noreferrer"
          >
            პროექტის შესახებ
          </a>
        </span>
      </div>
      <div style={{marginBottom: "3rem"}}></div>
      <div className="container">
          <div className="row">
              <div className="col-lg-12 col-md-12">
                  <div className="about__section__title">
                      <div className="about__title__header">
                          <h5>ფსიქოლოგიური საკონსულტაციო ცენტრები სტუდენტებისთვის</h5>
                          <h3 className="about__title__container">
                          ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY
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
                  <p className="about__title__p helvetica:medium color:gray">ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY (617980-EPP-1-2020-1-GE-EPPKA2-CBHE-SP)</p>
                  <p className="about__title__p helvetica:medium color:gray"><br/>
E-PSY პროექტის (განხორციელების პერიოდი – 2021-2023 წწ.) ზოგადი მიზანია სტუდენტებისთვის სოციალური და ფსიქოლოგიური დახმარების გაწევა საქართველოს უმაღლეს სასწავლებლებში ფსიქოლოგიური კონსულტაციების ცენტრების შექმნის გზით. ზოგადი მიზნიდან გამომდინარეობს ხუთი კონკრეტული მიზანი:<br/>
&nbsp; &nbsp; 1. ფსიქოლოგიური ცენტრების შექმნა სტუდენტებისთვის პარტნიორ უმაღლეს სასწავლებლებში;<br/>
&nbsp; &nbsp; 2. პერსონალის მომზადება და გადამზადება;<br/>
&nbsp; &nbsp; 3. რეკომენდაციებისა &nbsp;და საკანონმდებლო დოკუმენტაციების შემუშავება;<br/>
&nbsp; &nbsp; 4. ფსიქიკური ჯანმრთელობის შესახებ სტუდენტებისა და, საერთოდ, ფართო აუდიტორიის ცნობიერების ამაღლება;<br/>
&nbsp; &nbsp; 5. საქართველოს უნივერსიტეტების ფსიქოლოგიური კონსულტაციის ცენტრების ასოციაციის შექმნა.</p>
              </div>
          </div>
      </div>
        </>
    )
}
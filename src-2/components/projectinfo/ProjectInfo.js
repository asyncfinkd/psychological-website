import React from "react";
import { Link } from "react-router-dom";

export default function ProjectInfo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div
              style={{ position: "relative" }}
              className="spacing-5 z-index-0"
            >
              <div style={{ position: "relative", zIndex: "1" }}>
                <div>
                  <img
                    src="http://epsy.ge/img/about/about_1614767161.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="featured-icon-box style9 text-center icon-align-top-content ttm-bgcolor-skincolor">
                  <div className="featured-icon-box-inner-1">
                    <img
                      src="http://epsy.ge/images/icons/target.svg"
                      alt=""
                      style={{ height: "50px", marginBottom: "10px" }}
                    />
                    <h5
                      style={{
                        marginBottom: "0",
                        lineHeight: "1.2",
                        color: "white",
                        fontFamily: "BPG Mrgvlovani Caps",
                      }}
                    >
                      პროექტის მიზანი
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="ttm-bg about-right ttm-col-bgcolor-yes ttm-right-span ttm-bgcolor-white z-index-2">
              <div style={{ position: "relative", zIndex: "1" }}>
                <div style={{ position: "relative", marginBottom: "10px" }}>
                  <div style={{ paddingBottom: "5px" }}>
                    <h5
                      style={{
                        fontWeight: "500",
                        display: "block",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        lineHeight: "27px",
                        marginBottom: "5px",
                        marginTop: "0",
                        position: "relative",
                        fontFamily: "BPG Mrgvlovani Caps",
                        color: "#878494",
                      }}
                    >
                      ფსიქოლოგიური საკონსულტაციო ცენტრები სტუდენტებისთვის
                    </h5>
                    <h3
                      style={{
                        fontSize: "20px",
                        lineHeight: "1.35",
                        fontFamily: "BPG Mrgvlovani Caps",
                        marginBottom: "15px",
                        color: "#072640",
                      }}
                    >
                      ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის
                      საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY
                    </h3>
                    <div className="about__title__div">
                      <span></span>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        margin: "0 0 15px",
                        fontFamily: "BPG Mrgvlovani Caps",
                        fontSize: "14px",
                      }}
                    >
                      ფსიქოლოგიური კონსულტაციის ცენტრების შექმნა სტუდენტებისთვის
                      საქართველოს უმაღლეს საგანმანათლებლო დაწესებულებებში E-PSY
                      (617980-EPP-1-2020-1-GE-EPPKA2-CBHE-SP) E-PSY პროექტის
                      (განხორციელების პერიოდი – 2021-2023 წწ.) ზოგადი მიზანია
                      სტუდენტებისთვის სოციალური და ფსიქოლოგიური დახმარების
                      გაწევა საქართველოს უმაღლეს სასწავლებლებში ფსიქოლოგიური
                      კონსულტაციების ცენტრების შექმნის გზით
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    borderColor: "#f1f1f1",
                    marginBottom: "20px",
                    marginTop: "20px",
                    position: "relative",
                    display: "block",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  }}
                ></div>
                <div className="d-sm-flex align-items-center">
                  <Link
                    to="/about"
                    style={{
                      border: "1px solid #083b66",
                      borderRadius: "5px",
                      fontSize: "12px",
                      lineHeight: "13px",
                      padding: "15px 30px 15px 25px",
                      marginRight: "20px !important",
                      marginTop: "10px !important",
                      display: "inline-block",
                      position: "relative",
                      textTransform: "uppercase",
                      overflow: "hidden",
                      color: "#083b66",
                      fontFamily: "BPG Mrgvlovani Caps",
                      transition: "all 0.2s ease",
                    }}
                    className="hover__moreDetail__btn_ts"
                  >
                    დაწვრილებით
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

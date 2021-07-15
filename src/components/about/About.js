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
        </>
    )
}
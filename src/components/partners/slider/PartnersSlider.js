import React, { useContext } from "react";
import "./PartnersSlider.css";
import { EventsContext } from "../../../context/events/EventsContext";
import { useTranslation } from "react-i18next";

export default function PartnersSlider() {
  const { t } = useTranslation();
  const { partners } = useContext(EventsContext);
  const renderWithProps = (firstCondition, secondCondition) => {
    const local = localStorage.getItem("lang");
    if (local == "en") {
      return firstCondition;
    } else {
      return secondCondition;
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="partnersSlider__title">{t("PARTNERS")}</h3>
        <div className="about__title__div">
          <span></span>
        </div>
        <div className="partnersSlider__container" id="scroll__custom">
          {partners.map((item) => {
            return (
              <>
                <div
                  className="partnersSlider__content"
                  onClick={() => {
                    window.open(
                      `${renderWithProps(item.en[0].route, item.ge[0].route)}`,
                      "_blank"
                    );
                  }}
                >
                  <img
                    src={renderWithProps(item.en[0].image, item.ge[0].image)}
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

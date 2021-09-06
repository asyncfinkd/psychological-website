import React, { useContext } from "react";
import "./PartnersSlider.css";
import { EventsContext } from "../../../context/events/EventsContext";
import { useTranslation } from "react-i18next";

export default function PartnersSlider() {
  const {t} = useTranslation();
  const { partners } = useContext(EventsContext);
  return (
    <>
      <div className="container">
        <h3 className="partnersSlider__title">{t("PARTNERS")}</h3>
        <div className="about__title__div">
          <span></span>
        </div>
        <div className="partnersSlider__container" id="scroll__custom">
          {partners.map((item) => {
            {
              console.log(item);
            }
            return (
              <>
                <div
                  className="partnersSlider__content"
                  onClick={() => {
                    window.open(`${item.route}`, "_blank");
                  }}
                >
                  <img src={item.image} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

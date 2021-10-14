import React, { useState } from "react";

export default function ContactPagesMap({ item }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <>
          <div
            className="modal__container__contact"
            onClick={() => {
              setShowModal(!showModal);
            }}
          ></div>
          <div className="modal__container__content">
            <div
              className="modal__container__close"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              ×
            </div>
            <div className="modal__container__dev">
              <div className="modal__container__flex">
                {item?.info?.map((item2) => {
                  return (
                    <>
                      <div className="MLclqmclqwmle">
                        {item2?.role && (
                          <p
                            style={{
                              fontFamily: "BPG Mrgvlovani Caps",
                              fontSize: "14px",
                              marginBottom: "10px",
                            }}
                          >
                            {item2.role}
                          </p>
                        )}
                        <p
                          style={{
                            fontFamily: "BPG Mrgvlovani Caps",
                            fontSize: "14px",
                          }}
                        >
                          სახელი გვარი: {item2.username}
                        </p>
                        {item?.title == "ტელეფონი:" && (
                          <p
                            style={{
                              fontFamily: "BPG Mrgvlovani Caps",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            ტელეფონის ნომერი: {item2.title}
                          </p>
                        )}
                        {item?.title == "ელ.ფოსტა:" && (
                          <p
                            style={{
                              fontFamily: "BPG Mrgvlovani Caps",
                              fontSize: "14px",
                              marginTop: "10px",
                            }}
                          >
                            ელექტრონული ფოსტა: {item2.subTitle}
                          </p>
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
      <div className={`col-lg-4`}>
        <div className="contactPages__content">
          <div className="contactPages__icon">
            <div className="contactPages__iconHead">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="contactPages__textContent">
            <div className="contactPages__textContent__Paragraph">
              <h5
                onClick={() => {
                  if (item.combine) {
                    setShowModal(!showModal);
                  }
                }}
              >
                {item?.title}
              </h5>
            </div>
            <div className="contactPages__textContent__Description">
              <a href={`tel:${item?.subTitle}`}>{item?.subTitle}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

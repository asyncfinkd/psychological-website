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
                        {item2?.username && (
                          <p
                            style={{
                              fontFamily: "BPG Mrgvlovani Caps",
                              fontSize: "14px",
                            }}
                          >
                            {item2.username}
                          </p>
                        )}
                        <p
                          style={{
                            fontFamily: "BPG Mrgvlovani Caps",
                            fontSize: "14px",
                            marginTop: "10px",
                          }}
                        >
                          ტელეფონის ნომერი: {item2.title}
                        </p>
                        <p
                          style={{
                            fontFamily: "BPG Mrgvlovani Caps",
                            fontSize: "14px",
                            marginTop: "10px",
                          }}
                        >
                          ელ-ფოსტა: {item2.subTitle}
                        </p>
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
          <div className="contactPages__icon"></div>
          <div className="contactPages__textContent">
            <div className="contactPages__textContent__Paragraph">
              <h5>{item?.title}</h5>
            </div>
            <div
              className="contactPages__textContent__Description"
              style={{ marginBottom: "15px" }}
            >
              <a href={`tel:${item?.subTitle}`}>{item?.subTitle}</a>
            </div>
            {item?.combine === true && (
              <a
                className="main-button"
                style={{
                  fontFamily: "BPG Arial",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (item.combine) {
                    setShowModal(!showModal);
                  }
                }}
              >
                დაწვრილებით
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

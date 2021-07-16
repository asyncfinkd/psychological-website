import React, { useState } from "react";
import "./TalkToUs.css";

export default function TalkToUs() {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        message: ""
    });
    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const identification = () => {
        if(!inputs.fullName) {
            setFullNameError(true);
            setEmailError(false);
            setMessageError(false);
        } else if(!inputs.email) {
            setEmailError(true);
            setFullNameError(false);
            setMessageError(false);
        } else if(!inputs.message) {
            setFullNameError(false);
            setEmailError(false);
            setMessageError(true);
        } else {
            setFullNameError(false);
            setEmailError(false);
            setMessageError(false);
        }
    }
    return(
        <>
<section className="section colored" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title helvetica:bold">მოგვწერეთ</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p className="helvetica:bold">
                თუ გაქვთ პრობლემა, მოგვწერეთ პრობლემის შესახებ
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="margin-bottom-30 helvetica:bold" style={{fontSize: "16px"}}>შეიყვანეთ ინფორმაცია</h5>
              <div className="contact-text">
                <p className="helvetica:bold">
                  აუცილებელია ყველა ველის შევსება რათა გამოიგზავნოს ჩვენთან თქვენი შეტყობინება
                </p>
                <p className="helvetica:bold">
                  შეიყვანეთ შეტყობინებაში პრობლემის აღწერა რათა შევძლოთ აღმოფხვრა
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact" onSubmit={e=>e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="fullName"
                          value={inputs.fullName}
                          onChange={handleChange}
                          type="text"
                          className="form-control helvetica:bold"
                          id="name"
                          placeholder="სახელი გვარი"
                          required=""
                          style={{fontSize: '12px'}}
                        />
                      </fieldset>
                      <div>qwe</div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          value={inputs.email}
                          onChange={handleChange}
                          type="email"
                          className="form-control helvetica:bold"
                          id="email"
                          placeholder="ელექტრონული ფოსტა"
                          required=""
                          style={{fontSize: '12px'}}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          value={inputs.message}
                          onChange={handleChange}
                          className="form-control helvetica:bold"
                          id="message"
                          placeholder="შეტყობინება"
                          required=""
                          style={{fontSize: '12px'}}
                          ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          onClick={() => identification()}
                          id="form-submit"
                          className="main-button helvetica:bold"
                        >
                          გაგზავნა
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
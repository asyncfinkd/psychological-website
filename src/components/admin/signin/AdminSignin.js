import React, { useRef, useState } from "react";
import "./AdminSignin.css";
import env from "../../../application/environment/env.json";
import axios from "axios";

export default function AdminSignin() {
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const passwordRef = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const identificationButton = () => {
        if(!email) {
            setEmailError(true);
            emailRef.current.focus();
            setPasswordError(false);
        } else if(!password) {
            setPasswordError(true);
            passwordRef.current.focus();
            setEmailError(false);
        } else {
            setPasswordError(false);
            setEmailError(false);
            axios.post(`${env.host}/auth/readSignin`, {
                email,
                password
            }).then((res) => {
                if(res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.setItem("logged", true);
                    window.location.reload();
                }
            })
        }
    }
    return(
        <>
            <div className="form__admin__containerBody">
            <form onSubmit={e => e.preventDefault()} className="form__admin__container helvetica:regular">
                <h2 className="form__admin__title">შესვლა ადმინისტრატორით</h2>
                <div className="position:relative">
                    <input type="text" ref={emailRef} autoFocus className={emailError ? "form__admin__input form__admin__input__error" : "form__admin__input"} placeholder="ელექტრონული ფოსტა" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                    {emailError && <small className="form__admin__errorLabel">შეიყვანეთ ელექტრონული ფოსტა</small>}
                </div>
                <div className="position:relative">
                    <input type={showPassword ? "text" : "password"} ref={passwordRef} className={passwordError ? "form__admin__input form__admin__input__error" : "form__admin__input"} placeholder="პაროლი" value={password} onChange={e => setPassword(e.target.value)} /><br/>
                    {passwordError && <small className="form__admin__errorLabel">შეიყვანეთ პაროლი</small>}
                    <div className={showPassword ? "form__admin__passwordEye form__admin__passwordShowEye" : "form__admin__passwordEye form__admin__passwordHideEye"} onClick={() => {
                        setShowPassword(!showPassword)
                    }}></div>
                </div>
                <div>
                    <button className="form__admin__button" type="submit" onClick={() => identificationButton()}>შესვლა</button>
                </div>
            </form>
            </div>
        </>
    )
}
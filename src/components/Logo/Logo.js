import React from "react";
import burgerLogo from "../../assets/images/logo.png";
import "./Logo.css";
const logo = () => (
    <div className="Logo">
        <img src={burgerLogo}  alt="MyBurger" />
    </div>

);

export default logo;
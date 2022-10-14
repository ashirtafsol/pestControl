import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header container">
      <Link to="/">
        <div className="header__left">
          <img className="brandLogo" src={logo} alt="" />
        </div>
      </Link>
      <div className="header__right">
        <Link to="/products">
          <h3 className="pageLink">Join Us</h3>
        </Link>

        <Link to="/contact">
          <h3 className="pageLink">Contact Us</h3>
        </Link>

        <Link>
          <button className="loginButton">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

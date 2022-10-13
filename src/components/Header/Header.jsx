import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img
            className="brandLogo"
            src="https://media.istockphoto.com/vectors/army-radar-icon-vector-isolated-contour-symbol-illustration-vector-id1205504208?b=1&k=20&m=1205504208&s=612x612&w=0&h=Rf05JN8wCfTNj_9bw6pO-wvR52_Fy7wLKqIGMJCloyU="
            alt=""
          />
          <h3 className="logoText">Pest Radar</h3>
        </div>
      </Link>
      <div className="header__right">
        <Link>
          <h3>Join Us</h3>
        </Link>

        <Link to="/contact">
          <h3>Contact Us</h3>
        </Link>

        <Link>
          <button className="loginButton">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import {
  ContactEmergency,
  ContactPage,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__body">
        <div className="footerSection">
          <div className="footerSection__logo">
            <img className="footerLogo" src={logo} alt="" />
            {/* <h3 className="logoText">Pest Radar</h3> */}
          </div>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.It is a long established fact that
              a reader.
            </p>
          </div>
          <div className="socialIcons">
            <Facebook />
            <Instagram />
            <LinkedIn />
            <YouTube />
          </div>
        </div>

        <div className="footerSection">
          <h5>Useful Links</h5>
          <div>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Reviews</p>
            <p>Why Choose Us</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="footerSection">
          <h5>Services</h5>
          <div>
            <p>Spiders</p>
            <p>Fly Control</p>
            <p>Bee Control</p>
            <p>Ant Control</p>
            <p>Termites</p>
            <p>Rodents</p>
          </div>
        </div>

        <div className="footerSection">
          <h5>Contact Us</h5>
          <div>
            <div className="footerContacts">
              <Phone color="primary" />
              <p>+091 123 456 789</p>
            </div>
            <div className="footerContacts">
              <Mail color="primary" />
              <p>info@pestradar.com</p>
            </div>
            <div className="footerContacts">
              <ContactPage color="primary" />
              <p>265 Conor Locks Suite 134, New 714 Blackwell Street</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>©Copyright 2022. Pest Radar. | All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

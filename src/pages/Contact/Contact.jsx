import { Check } from "@mui/icons-material";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__body">
        <div className="contactBody__left">
          <h5>Michigan Manual For The Prevention And Control Of Bed Bugs</h5>
          <div className="contact__text">
            <p>Acknowledgements & Table of Contents</p>
            <div className="contact__tip">
              <Check color="primary" />
              <p>Introduction</p>
            </div>
            <div className="contact__tip">
              <Check color="primary" />
              <p>Getting to Know the Bed Bug Bed Bug</p>
            </div>
            <div className="contact__tip">
              <Check color="primary" />
              <p>Biology and Control Issues</p>
            </div>
            <div className="contact__tip">
              <Check color="primary" />
              <p>Health Concerns Associated With Bed Bugs </p>
            </div>
            <div className="contact__tip">
              <Check color="primary" />
              <p>Bed Bugs – Laws and Regulations</p>
            </div>

            <div className="">
              <button className="contactBtn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="contactBody__right">
          <img
            className="rightBigImg"
            src="https://www.alhajjajpest.com/wp-content/uploads/2021/07/f4-1024x576.jpg"
            alt=""
          />
          <div className="smallImgs">
            <img
              className="rightSmallImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6SL43OwOat5DMdHLo2exRb_BkVZ3qMZprA&usqp=CAU"
              alt=""
            />
            <img
              className="rightSmallImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6SL43OwOat5DMdHLo2exRb_BkVZ3qMZprA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

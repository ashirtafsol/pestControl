import React, { useState } from "react";
import "./HeroSection.css";
import bgImg from "../../assets/images/hero.png";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function HeroSection() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="heroSection">
      <div
        className="sndHeader"
        style={{
          "--img": `url(${bgImg}), 
      linear-gradient(#e66465, #9198e5)`,
        }}
      >
        <div className="heroSection__content">
          <div className="heroSection__left">
            <h2 className="heroHeading">
              Have <span>Pest Control</span> On Your Way
            </h2>
            <p className="heroText">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="heroContact">Contact Us</button>
          </div>
          <div className="heroSection__right">
            <h3>Looking for Pest Control Services ?</h3>
            <div className="heroSection__inputs">
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Zip Code" />
              <div className="heroInput">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
              <button className="heroBtnSearch">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

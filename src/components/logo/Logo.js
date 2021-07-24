import React from "react";
import "./Logo.styles.css";
import imageLogo from "./brain.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <Tilt className="logo">
      <img src={imageLogo} alt="Smart Brain" />
    </Tilt>
  );
};

export default Logo;

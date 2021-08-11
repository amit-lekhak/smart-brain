import React from "react";
import "./Logo.styles.css";
import imageLogo from "./brain.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
  return (
    <Tilt className="logo">
      <img width="100px" height="100px" src={imageLogo} alt="Smart Brain" />
    </Tilt>
  );
};

export default Logo;

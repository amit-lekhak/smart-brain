import React from "react";
import "./Navlink.styles.css";

const NavLink = () => {
  return (
    <div style={{"marginBottom":"20px"}}>
      <nav className="navlink">
        <p className="route">Sign in</p>
        <p className="route">Register</p>
      </nav>
    </div>
  );
};

export default NavLink;

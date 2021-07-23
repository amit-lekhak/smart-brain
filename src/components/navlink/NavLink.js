import React from "react";
import "./Navlink.styles.css";

const NavLink = () => {
  return (
    <div style={{"marginBottom":"20px"}}>
      <nav className="navlink">
        <p>Sign in</p>
        <p>Register</p>
      </nav>
    </div>
  );
};

export default NavLink;

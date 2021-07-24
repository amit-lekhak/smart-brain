import React from "react";
import "./Navlink.styles.css";

const NavLink = ({onRouteChange}) => {
  return (
    <div style={{"marginBottom":"20px"}}>
      <nav className="navlink">
        <p className="route" onClick={() => onRouteChange("login")}>Sign in</p>
        <p className="route" onClick={() => onRouteChange("register")}>Register</p>
      </nav>
    </div>
  );
};

export default NavLink;

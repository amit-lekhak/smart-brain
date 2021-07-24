import React from "react";
import "./Navlink.styles.css";

const NavLink = ({onRouteChange,route,updateUserState}) => {
  return (
    <div style={{"marginBottom":"20px"}}>
      <nav className="navlink">
      {route === "home" ? (
        <p className="route" onClick={() => updateUserState({error:"",user:{},route:"login"})}>Sign out</p>

      ):(
        <>
        <p className="route" onClick={() => onRouteChange("login")}>Sign in</p>
        <p className="route" onClick={() => onRouteChange("register")}>Register</p>

        </>
      )}
      </nav>
    </div>
  );
};

export default NavLink;

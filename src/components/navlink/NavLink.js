import React from "react";
import { removeToken } from "../../utility/helperFunctions";
import "./Navlink.styles.css";

const NavLink = ({ onRouteChange, route, updateUserState }) => {
  const signoutUser = () => {
    removeToken();
    updateUserState({ error: "", user: {}, route: "login" });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <nav className="navlink">
        {route === "home" ? (
          <p className="route" onClick={signoutUser}>
            Sign out
          </p>
        ) : (
          <>
            <p className="route" onClick={() => onRouteChange("login")}>
              Sign in
            </p>
            <p className="route" onClick={() => onRouteChange("register")}>
              Register
            </p>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavLink;

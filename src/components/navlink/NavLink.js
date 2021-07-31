import React from "react";
import Avatar from "../../containers/profile/avatar/Avatar";
import {
  removeToken,
  signoutUser,
  getToken,
} from "../../utility/helperFunctions";
import "./Navlink.styles.css";

const NavLink = ({ onRouteChange, route, updateUserState, user }) => {
  const signoutHandler = () => {
    signoutUser(getToken());

    removeToken();
    updateUserState({ error: "", user: {}, route: "login" });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <nav className="navlink">
        {route === "home" ? (
          <Avatar
            user={user}
            updateUserState={updateUserState}
            signoutHandler={signoutHandler}
          />
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

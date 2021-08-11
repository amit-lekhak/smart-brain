import React from "react";
import {
  removeToken,
  signoutUser,
  getToken,
} from "../../utility/helperFunctions";
import Loading from "../Loading/Loading";
import "./Navlink.styles.css";

const Avatar = React.lazy(() =>
  import("../../containers/profile/avatar/Avatar")
);

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
          <React.Suspense fallback={Loading()}>
            <Avatar
              user={user}
              updateUserState={updateUserState}
              signoutHandler={signoutHandler}
            />
          </React.Suspense>
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

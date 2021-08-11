import React, { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import "./Avatar.styles.css";

const Portal = React.lazy(() => import("../../../components/portal/Portal"));
const Dropdown = React.lazy(() => import("../dropdown/Dropdown"));
const Profile = React.lazy(() => import("../Profile"));

const Avatar = ({ signoutHandler, updateUserState, user }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const dropdownHandler = () => {
    setToggleDropdown((state) => {
      return !state;
    });
  };

  const profileClickHandler = () => {
    dropdownHandler();
    setShowProfile(true);
  };

  return (
    <div className="dropdown-container">
      <div>
        <img
          onClick={dropdownHandler}
          className="avatar route"
          src="https://tachyons.io/img/logo.jpg"
          alt="avatar"
        />
      </div>
      <React.Suspense fallback={Loading()}>
        {toggleDropdown && (
          <Dropdown
            profileClickHandler={profileClickHandler}
            signoutHandler={signoutHandler}
          />
        )}

        <Portal>
          {showProfile && (
            <Profile
              setShowProfile={setShowProfile}
              updateUserState={updateUserState}
              user={user}
            />
          )}
        </Portal>
      </React.Suspense>
    </div>
  );
};

export default Avatar;

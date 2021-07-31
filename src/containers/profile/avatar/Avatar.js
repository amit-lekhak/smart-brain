import React, { useState } from "react";
import Portal from "../../../components/portal/Portal";
import Dropdown from "../dropdown/Dropdown";
import Profile from "../Profile";
import "./Avatar.styles.css";

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
          src="http://tachyons.io/img/logo.jpg"
          alt="avatar"
        />
      </div>
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
    </div>
  );
};

export default Avatar;

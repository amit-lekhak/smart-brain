import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import "./Avatar.styles.css";

const Avatar = ({ signoutHandler }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropdownHandler = () => {
    setToggleDropdown((state) => {
      return !state;
    });
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
      {toggleDropdown && <Dropdown signoutHandler={signoutHandler} />}
    </div>
  );
};

export default Avatar;

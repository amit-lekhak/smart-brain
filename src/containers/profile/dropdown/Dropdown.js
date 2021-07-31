import React from "react";
import "./Dropdown.styles.css";

const Dropdown = ({ signoutHandler }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-items">Profile</div>
      <hr />
      <div onClick={signoutHandler} className="dropdown-items">
        Signout
      </div>
    </div>
  );
};

export default Dropdown;

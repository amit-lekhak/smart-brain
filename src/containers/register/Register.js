import React from "react";
import "../login/Login.styles.css";

const Register = ({onRouteChange}) => {
  return (
    <>
      <h1 className="title">Register</h1>

      <form>
        <div className="form-item">
          <label htmlFor="name">
            <h4>Name</h4>
          </label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="form-item">
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="form-item">
          <label htmlFor="password">
            <h4>Password</h4>
          </label>
          <input type="password" name="password" id="password" />
        </div>
      </form>

      <button>
        <h4>Register</h4>
      </button>

      <p className="route" onClick={() => onRouteChange("login")}>Login</p>
    </>
  );
};

export default Register;

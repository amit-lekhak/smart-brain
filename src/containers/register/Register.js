import React, { useState } from "react";
import "../login/Login.styles.css";

const Register = ({ onRouteChange, updateUserState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    } else if (field === "name") {
      setName(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !name) return;

    fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return updateUserState({
            error: data.error,
            user: {},
            route: "register",
          });
        }

        setEmail("");
        setPassword("");
        setName("");
        return updateUserState({ error: "", user: data.user, route: "home" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="title">Register</h1>

      <form onSubmit={onSubmitHandler}>
        <div className="form-item">
          <label htmlFor="name">
            <h4>Name</h4>
          </label>
          <input
            onChange={onInputChange}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
          <input
            onChange={onInputChange}
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>

        <div className="form-item">
          <label htmlFor="password">
            <h4>Password</h4>
          </label>
          <input
            onChange={onInputChange}
            type="password"
            name="password"
            id="password"
            value={password}
          />
        </div>
        <div className="form-item">
          <button type="submit">
            <h4>Register</h4>
          </button>
        </div>
      </form>

      <p className="route" onClick={() => onRouteChange("login")}>
        Login
      </p>
    </>
  );
};

export default Register;

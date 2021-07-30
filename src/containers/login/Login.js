import React, { useState } from "react";
import "./Login.styles.css";

const Login = ({ onRouteChange, updateUserState }) => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  const onInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return updateUserState({
            error: data.error,
            user: {},
            route: "login",
          });
        }

        setEmail("");
        setPassword("");
        return updateUserState({ error: "", user: data.user, route: "home" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="title">Sign In</h1>

      <form onSubmit={onSubmitHandler}>
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
            <h4>Sign in</h4>
          </button>
        </div>
      </form>

      <p className="route" onClick={() => onRouteChange("register")}>
        Register
      </p>
    </>
  );
};

export default Login;

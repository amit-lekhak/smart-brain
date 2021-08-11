import React, { useState } from "react";
import "./Login.styles.css";
import { fetchProfile, saveToken } from "../../utility/helperFunctions";

const Login = ({ onRouteChange, updateUserState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChangeHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  const loginUser = (email, password) => {
    fetch("https://smart-brain-docker.herokuapp.com/api/login", {
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

        const token = data.token;

        setEmail("");
        setPassword("");
        saveToken(token);

        fetchProfile(token)
          .then((data) => {
            if (data.error) {
              return updateUserState({
                error: data.error,
                user: {},
                route: "login",
              });
            }

            return updateUserState({
              error: "",
              user: data.user,
              route: "home",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    loginUser(email, password);
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
            onChange={onInputChangeHandler}
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
            onChange={onInputChangeHandler}
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

import React from 'react'
import "./Login.styles.css";

const Login = () => {
    return (
        <>
            <h1 className="title">Sign In</h1>

            <form >
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

            <button><h4>Sign in</h4></button>

            <p className="route">Register</p>
        </>
    )
}

export default Login

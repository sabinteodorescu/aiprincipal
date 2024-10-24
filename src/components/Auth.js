import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/auth.css";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debug log
    if (isSignUp) {
      console.log("Signing up with", email, password); // Add logic for sign-up
    } else {
      console.log("Signing in with", email, password); // Add logic for sign-in
    }
  };

  return (
    <div className={`auth-body ${isSignUp ? "sign-up-active" : ""}`}>
      <div className="auth-symbol"></div>
      <div
        className={`auth-container ${isSignUp ? "auth-active" : ""}`}
        id="container"
      >
        <div
          className={`auth-form-container ${isSignUp ? "sign-up" : "sign-in"}`}
        >
          <form onSubmit={handleSubmit}>
            <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faApple} />
              </a>
            </div>
            <span>
              {isSignUp
                ? "or use your email for registration"
                : "or use your email for login"}
            </span>
            {isSignUp && <input type="text" placeholder="Name" required />}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isSignUp ? (
              <input className="auth-btn" type="submit" value="Sign up" />
            ) : (
              <>
                <a href="#">Forget Your Password?</a>
                <input className="auth-btn" type="submit" value="Sign in" />
              </>
            )}
          </form>
        </div>
        <div className="auth-toggle-container">
          <div className="auth-toggle">
            <div className="auth-toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="auth-hidden"
                id="login"
              >
                Sign in
              </button>
            </div>
            <div className="auth-toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="auth-hidden"
                id="register"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

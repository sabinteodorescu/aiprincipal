import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../hooks/AuthProvider";
import "./styles/auth.css";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

function Auth() {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const handleSignupChange = async (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(signupData);
    signup(signupData);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={`auth-body ${isSignUp ? "sign-up-active" : ""}`}>
      <div className="auth-symbol"></div>
      <div className="auth-container" id="container">
        <div className="auth-form-container sign-up">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
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
            <span>or use your email for registeration</span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleSignupChange}
              value={signupData.name}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleSignupChange}
              value={signupData.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleSignupChange}
              value={signupData.password}
            />
            <input type="submit" value="Sign up" />
          </form>
        </div>
        <div className="auth-form-container sign-in">
          <form onSubmit={handleSignin}>
            <h1>Sign In</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-apple"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <input type="submit" value="Sign in" />
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

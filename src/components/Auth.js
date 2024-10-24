import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/auth.css'

function Auth() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="auth-body">
      <div className="auth-symbol"></div>
      <div className="auth-container" id="container">
        <div className="auth-form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign up" />
          </form>
        </div>
        <div className="auth-form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
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
              <input type="submit" className="auth-hidden" id="login" value="Sign in" />
            </div>
            <div className="auth-toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <input type="submit" className="auth-hidden" id="register" value="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
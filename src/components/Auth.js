import React, { useState } from 'react'
import { useAuth } from '../hooks/AuthProvider'
import './styles/auth.css'

function Auth() {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [signinData, setSigninData] = useState({
    email: '',
    password: ''
  })
  
  const { signup, signin } = useAuth()

  const handleSignupChange = async (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  }

  const handleSigninChange = async (e) => {
    setSigninData({
      ...signinData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSignup = async (e) => {
    e.preventDefault()

    console.log(signupData)
    await signup(signupData)
  }

  const handleSignin = async (e) => {
    e.preventDefault()

    console.log(signinData)
    await signin(signinData)
  }

  return (
    <div className="auth-body">
      <div className="auth-symbol"></div>
      <div className="auth-container" id="container">
        <div className="auth-form-container sign-up">
          <form onSubmit={handleSignup}>
            <h1>Create Account</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" name="name" onChange={handleSignupChange} value={signupData.name} />
            <input type="email" placeholder="Email" name="email" onChange={handleSignupChange} value={signupData.email} />
            <input type="password" placeholder="Password" name="password" onChange={handleSignupChange} value={signupData.password} />
            <input type="submit" value="Sign up" />
          </form>
        </div>
        <div className="auth-form-container sign-in">
          <form onSubmit={handleSignin}>
            <h1>Sign In</h1>
            <div className="auth-social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-apple"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" name="email" onChange={handleSigninChange} value={signinData.email} />
            <input type="password" placeholder="Password" name="password" onChange={handleSigninChange} value={signinData.password} />
            <a href="#">Forget Your Password?</a>
            <input type="submit" value="Sign in" />
          </form>
        </div>
        <div className="auth-toggle-container">
          <div className="auth-toggle">
            <div className="auth-toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="auth-hidden" id="login" value="Sign in" />
            </div>
            <div className="auth-toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="auth-hidden" id="register" value="Sign up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
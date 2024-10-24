import React, { useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import '../styles/auth.css'

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

  const [isSignUp, setIsSignUp] = useState(false)
  
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

  const toggleAuthContainer = () => {
    setIsSignUp((prev) => !prev)
  }

  return (
    <div className="auth-body">
      <div className="auth-symbol"></div>
      <div className={`auth-container ${isSignUp ? 'auth-active' : ''}`} id="container">
        <div className={`auth-form-container sign-up ${isSignUp ? '' : 'op0'}`}>
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
        <div className={`auth-form-container sign-in ${isSignUp ? 'op0' : ''}`}>
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
            <div className="auth-toggle-panel toggle-sign-in">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button onClick={toggleAuthContainer} className="auth-hidden" id="login">Sign in</button>
            </div>
            <div className="auth-toggle-panel toggle-sign-up">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button onClick={toggleAuthContainer} className="auth-hidden" id="register">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
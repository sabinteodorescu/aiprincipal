import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h1>Train <span>your </span>newcommers <span>better and faster</span></h1>
        <p>
          Make use of our powerful AI based platform to reduce external training costs in order to maximise the 
          performance  of your team.  Our platform is designed to help you achieve your goals faster and more efficiently,
          in terms of training new  employees, improving the performance of your existing team, and reducing the costs 
          associated with bringing  new talent into your organisation.
        </p>
        <Link to="/authentication"><button className="btn">Get Started</button></Link>
      </div>
      <div className="symbol"></div>
    </header>
  )
}

export default Header
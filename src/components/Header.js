import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h1>Start <span>now </span>to become an <span>Academic Weapon</span></h1>
        <p>
          Take university-level courses with our AI-driven classes, covering almost every subject. Our AI models, 
          trained on real courses from 'Lucian Blaga' University, provide accurate and relevant information. Our 
          AI teachers tailor the courses to your knowledge and questions, delivering the information you need in 
          the best way possible.
        </p>
        <Link to="/authentication"><button className="btn">Get Started</button></Link>
      </div>
      <div className="symbol"></div>
    </header>
  )
}

export default Header
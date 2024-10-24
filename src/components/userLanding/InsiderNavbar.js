import React from 'react'
import { Link } from 'react-router-dom'

function InsiderNavbar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
          <img src={require("../../images/logo 2.png")} />
        </a>
      </div>

      <ul className="nav-links">
        <li className="link"><Link to="#">####</Link></li>
        <li className="link"><Link to="#">####</Link></li>
        <li className="link"><Link to="#">####</Link></li>
        <li className="link"><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  )
}

export default InsiderNavbar
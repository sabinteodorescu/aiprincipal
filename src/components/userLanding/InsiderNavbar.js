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
        <li className="link"><a href="#">####</a></li>
        <li id="link1" className="link"><a href="#">####</a></li>
        <li id="link2" className="link"><a href="#">####</a></li>
        <Link to="/logout" className="link">Logout</Link>
      </ul>
    </nav>
  )
}

export default InsiderNavbar
import React from 'react'

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
        <li id="link3" className="link"><a href="#">####</a></li>
      </ul>
    </nav>
  )
}

export default InsiderNavbar
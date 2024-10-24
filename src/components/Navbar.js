import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
          <img src={require("../images/logo 2.png")} />
        </a>
      </div>

      <ul className="nav-links">
        <li className="link"><a href="#">Home</a></li>
        <li id="link1" className="link"><a href="#">Features</a></li>
        <li id="link2" className="link"><a href="#">Pricing</a></li>
        <li id="link3" className="link"><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
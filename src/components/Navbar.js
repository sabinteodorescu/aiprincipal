import React from 'react'

function Navbar() {
  return (
    <nav>
      <div class="nav-logo">
        <a href="#">
          <img src={"images/logo 2.png"} />
        </a>
      </div>

      <ul class="nav-links">
        <li class="link"><a href="#">Home</a></li>
        <li id="link1" class="link"><a href="#">Features</a></li>
        <li id="link2" class="link"><a href="#">Pricing</a></li>
        <li id="link3" class="link"><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
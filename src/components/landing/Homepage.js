import React from 'react'
import Header from './Header'
import Navbar from '../landing/Navbar'
import About from './About'
import Plans from '../landing/Plans'
import Footer from './Footer'
import '../styles/homepage.css'

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Plans />
      <Footer />
    </>
  )
}

export default Homepage
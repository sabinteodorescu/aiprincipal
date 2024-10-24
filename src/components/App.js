import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Auth from './Auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<Auth />} path='/authentication' />
      </Routes>
    </Router>
  )
}

export default App
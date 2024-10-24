import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthProvider from '../hooks/AuthProvider'
import Homepage from './Homepage'
import Auth from './Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Homepage />} path='/' />
          <Route element={<Auth />} path='/authentication' />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
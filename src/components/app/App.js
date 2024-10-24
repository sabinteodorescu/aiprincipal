import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from '../landing/Homepage'
import Auth from '../authentication/Auth'
import AuthProvider from '../../hooks/AuthProvider'
import InsiderHome from '../userLanding/InsiderHome'
import AuthRedirect from '../../router/AuthRedirect'
import AuthRoute from '../../router/AuthRoute'
import Logout from '../authentication/Logout'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<AuthRedirect />} >
            <Route element={<Homepage />} path='/' />
            <Route element={<Auth />} path='/authentication' />
          </Route>
          <Route element={<AuthRoute />} >
            <Route element={<InsiderHome />} path='/insHome' />
            <Route element={<Logout />} path='/logout' />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthProvider'

function Logout() {
  const { logout } = useAuth()
  useEffect(() => {
    logout()
  }, [logout])
  
  return <Navigate to='/' />
}

export default Logout
import { useContext, createContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const signup = async (data) => {
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
  }
  
  return (
    <AuthProvider.Context value={{ user }}>
      {children}
    </AuthProvider.Context>
  )
}
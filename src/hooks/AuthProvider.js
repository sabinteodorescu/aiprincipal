import { useContext, createContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  const loggedIn = !!token

  const signup = async (data) => {
    try {
      await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
        .then(async (response) => {
          const res = await response.json()
          if (res.data) {
            setUser(res.data.user)
            setToken(res.token)
            localStorage.setItem('token', res.token)
            return
          }
          throw new Error(res.message)
        })
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, loggedIn, signup }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
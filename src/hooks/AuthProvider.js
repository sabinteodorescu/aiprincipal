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
          if (response.ok) {
            setUser(res.data.user)
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)
            return
          } else {
            throw new Error(res.message)
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  const signin = async (data) => {
    try {
      await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
        .then(async (response) => {
          const res = await response.json()
          if (response.ok) {
            setUser(res.data.user)
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)
          } else {
            throw new Error(res.message)
          }
        })
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <AuthContext.Provider value={{ user, loggedIn, signup, signin }}>
      { children }
    </AuthContext.Provider>
  )
}
 
export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
  

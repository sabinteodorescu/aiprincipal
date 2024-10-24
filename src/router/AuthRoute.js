import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

function AuthRoute() {
    const { loggedIn } = useAuth()

    if (loggedIn === null) {
        return 'loading'
    }

    return loggedIn ? <Outlet /> : <Navigate to='/' />
}

export default AuthRoute
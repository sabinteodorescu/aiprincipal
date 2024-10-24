import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/AuthProvider'

function AuthRedirect() {
    const { loggedIn } = useAuth()

    if (loggedIn === null) {
        return 'loading'
    }

    return loggedIn ? <Navigate to='/insHome' /> : <Outlet />
}

export default AuthRedirect
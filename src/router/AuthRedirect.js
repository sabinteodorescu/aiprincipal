import { Navigate, Outlet } from 'react-router-dom'

function AuthRedirect() {
    //TODO - remove and implement a localStorage based  solution
    const loggedIn = true

    if (loggedIn === null) {
        return 'loading'
    }

    return loggedIn ? <Navigate to='/insHome' /> : <Outlet />
}

export default AuthRedirect
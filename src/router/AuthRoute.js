import { Navigate, Outlet } from 'react-router-dom'

function AuthRoute() {
    //TODO - remove and implement a localStorage based solution
    const loggedIn = false

    if (loggedIn === null) {
        return 'loading'
    }

    return loggedIn ? <Outlet /> : <Navigate to='/' />
}

export default AuthRoute
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './../context/AuthContext';

function LogoutRoute () {
    const {isAuthenticated, authToken} = useAuth();
    if (isAuthenticated && authToken) return <Navigate to='/dashboard' replace />

    return(
        <Outlet/>
    );
}

export default LogoutRoute;
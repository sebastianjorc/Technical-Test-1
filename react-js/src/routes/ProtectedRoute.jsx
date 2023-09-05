import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './../context/AuthContext';

function ProtectedRoute () {
    const {user, isAuthenticated, authToken} = useAuth();
    if (!isAuthenticated && !authToken) return <Navigate to='/' replace />

    return(
        <Outlet/>
    );
}

export default ProtectedRoute;
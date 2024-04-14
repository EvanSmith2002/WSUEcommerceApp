import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';

const PrivateRoute = ({requiredRole, page}) => {
    const user = useContext(UserContext)
    const role = user.user?.role

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return role === requiredRole ? page : <Navigate to="/access-denied" />;
}

export default PrivateRoute
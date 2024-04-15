import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import Axios from 'axios';

const PrivateRoute = ({ requiredRole, page }) => {
    const user = useContext(UserContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const res = await Axios.get('http://localhost:4000/auth/user');
                setRole(res.data.role);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserRole();
    }, [user.user]);

    // If loading, return a loading indicator
    if (loading) {
        return <div>Loading...</div>;
    }

    console.log('navigating with required role', requiredRole, ' role is: ', role);
    return role === requiredRole ? page : <Navigate to="/access-denied" />;
};

export default PrivateRoute;

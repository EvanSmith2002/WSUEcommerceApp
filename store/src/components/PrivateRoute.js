import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import Axios from 'axios';

const PrivateRoute = ({ requiredRole, page }) => {
    const {user} = useContext(UserContext);

    return user?.role === requiredRole ? (page) : (<Navigate to="/access-denied" />);
};

export default PrivateRoute;

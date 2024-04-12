import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

// User context provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Retrieve user data from local storage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Example function to set the user
    function login(userData) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // Example function to logout
    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const UserContext = createContext();

// User context provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const res = await Axios.get('http://localhost:4000/auth/user')
            const user = res.data
            setUser(user)
        } catch (error) {
            console.error(error)
            if (error.response && error.response.status === 401) { //handle errors here
                setUser(null)
            }
        }
    }

    // Retrieve user data from local storage on component mount
    useEffect(() => {
        getUser()
    }, []);

    // Example function to set the user
    function login(userData) {
        setUser(userData);
    };

    // Example function to logout
    function logout() {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const UserContext = createContext({
    user: null
});

// User context provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        console.log('fetching user from db')
    }

    // Retrieve user data from local storage on component mount
    useEffect(() => {
        getUser()
    }, [isLoggedIn]);

    useEffect(() => {
        console.log('usercontext user', user)
    }, [user]);

    // Example function to set the user
    function login(userData) {
        setUser(userData);
        setIsLoggedIn(true)
    };

    // Example function to logout
    function logout() {
        setUser(null);
        setIsLoggedIn(false)
    };

    const contextValue = {
        user: user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

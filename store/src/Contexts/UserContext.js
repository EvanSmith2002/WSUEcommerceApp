import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const UserContext = createContext({
    user: null
});

// User context provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) ?? null);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true')

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

    // Example function to set the user
    function login(userData) {
        console.log('userData', userData)
        setUser(userData);
        setIsLoggedIn(true)
        console.log('user context user', user)
        localStorage.setItem('user', JSON.stringify(userData)); // Store the user's data in localStorage
        localStorage.setItem('isLoggedIn', 'true');
    };

    // Example function to logout
    function logout() {
        setUser(null);
        setIsLoggedIn(false)
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
    };

    const contextValue = {
        user: user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={ {
            user,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userCourses, setUserCourses] = useState([]);
  const [userId, setUserId] = useState(null);

  const login = async(role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  const logout = () => {

    setTimeout(() => {
      
      setIsLoggedIn(false);
      setUserRole(null);
      // setUserCourses([]);
    }, 2000);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, userCourses, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

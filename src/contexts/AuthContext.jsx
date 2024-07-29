import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setIsAuthenticated(loggedIn === "true");
    setUsers(savedUsers);
  }, []);

  const login = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      throw new Error('Invalid username or password');
    }
  };

  const signUp = (username, password) => {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      throw new Error('Username already exists');
    }
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

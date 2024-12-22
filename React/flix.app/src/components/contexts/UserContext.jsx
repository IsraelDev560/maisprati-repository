import React, { createContext, useState } from 'react';
import image1 from "../../assets/user-netflix.jpg";
import image2 from "../../assets/user-netflix-2.jpg";
import image3 from "../../assets/user-netflix-3.jpg";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const [users, setUsers] = useState([
    { name: "User1", image: image1 },
    { name: "User2", image: image2 },
    { name: "User3", image: image3 },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserContext.Provider value={{ users, selectedUser, setSelectedUser, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Verifica se há um token no localStorage e ajusta o estado
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Buscar usuários quando o componente for montado
    if (token) {
      fetch('http://localhost:5000/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);

    // Buscar usuários após o login
    fetch('http://localhost:5000/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsers([]); // Limpa a lista de usuários ao sair
  };

  return (
    <UserContext.Provider value={{ users, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

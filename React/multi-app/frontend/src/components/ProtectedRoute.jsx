import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider'; // Ajuste o caminho se necessário

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    // Redireciona para a página de login se não estiver autenticado
    return <Navigate to="/" />;
  }

  // Renderiza o componente protegido se estiver autenticado
  return element;
};

export default ProtectedRoute;

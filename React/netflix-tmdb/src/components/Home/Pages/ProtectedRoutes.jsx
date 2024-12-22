import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
import { Routes, Route, useNavigate } from 'react-router-dom';
import QRCodeGenerator from './components/QRCodeGenerator';
import IPAddressFinder from './components/IPAddressFinder';
import MovieSearchEngine from './components/MovieSearchEngine';
import TodoApp from './components/TodoApp';
import QuizApp from './components/QuizApp';
import LanguageTranslator from './components/LanguageTranslator';
import ProtectedRoute from './components/ProtectedRoute'; // Importe o componente de rota protegida
import Login from './components/Login';
import { useContext } from 'react';
import { UserContext } from './contexts/UserProvider';
import AppContent from './AppContent';

const App = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (token) => {
    login(token);
    navigate('/'); // Redireciona para a página inicial após login
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/App"
        element={<ProtectedRoute element={<AppContent />} />}
      />
      <Route
        path="/qrcode-generator"
        element={<ProtectedRoute element={<QRCodeGenerator />} />}
      />
      <Route
        path="/ip-address-finder"
        element={<ProtectedRoute element={<IPAddressFinder />} />}
      />
      <Route
        path="/movie-search-engine"
        element={<ProtectedRoute element={<MovieSearchEngine />} />}
      />
      <Route
        path="/todo-app"
        element={<ProtectedRoute element={<TodoApp />} />}
      />
      <Route
        path="/quiz-app"
        element={<ProtectedRoute element={<QuizApp />} />}
      />
      <Route
        path="/language-translator"
        element={<ProtectedRoute element={<LanguageTranslator />} />}
      />
    </Routes>
  );
};

export default App;

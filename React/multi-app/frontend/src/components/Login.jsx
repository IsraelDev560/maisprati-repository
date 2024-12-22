import { useState, useContext } from 'react'; // Importa o hook useState do React
import '../styles/Login.css';
import { UserContext } from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate

const Login = ( {onLoginSuccess}) => {
  const { login } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      login(data.token);

      if (onLoginSuccess) {
        console.log('Login successful, calling onLoginSuccess');
        onLoginSuccess('Login bem-sucedido!'); // Chama o callback com a mensagem
      }

      navigate('/App'); // Redireciona após login bem-sucedido
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          value={name} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setName(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <button type="submit">Login</button> {/* Botão que envia o formulário */}
      </form>
    </div>
  );
};

export default Login; // Exporta o componente Login como padrão

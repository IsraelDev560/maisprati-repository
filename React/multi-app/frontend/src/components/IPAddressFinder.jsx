import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import '../styles/IPAdress.css'

// Componente principal IPAddressFinder
const IPAddressFinder = () => {
  const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP

  // Função para buscar os dados do IP
  const findIP = async () => {
    try {
      const url = `https://ipinfo.io/${ip}/json`
      const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
      setIpData(response.data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
      console.error("Error fetching IP address data:", error); // Exibe um erro no console em caso de falha
    }
  };

  return (
    <div className='Container'>
      <h2>IP Address Finder</h2>
      <input
        type="text"
        value={ip} // Valor do campo de entrada é ligado ao estado ip
        onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <button onClick={findIP}>Find IP</button> {/* Botão que chama a função findIP quando clicado */}
      {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
        <div className='ResultsContainer'>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </div>
      )}
    </div>
  );
};

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão

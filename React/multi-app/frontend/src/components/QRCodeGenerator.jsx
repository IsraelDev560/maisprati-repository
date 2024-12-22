// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import QRCode from 'qrcode.react';
import '../styles/QRCodeGenerator.css'
// Define o componente funcional QRCodeGenerator.
const QRCodeGenerator = () => {
  // Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  // 'text' armazena o texto que será codificado no QR Code.
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
  }

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <div className='container'>
      {/* Exibe o título do gerador de QR Code */}
      <h2>QR Code Generator</h2>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <input
        type="text"
        value={text} // Define o valor do input como o texto do estado.
        onChange={handleChange} // Atualiza o estado 'text' quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Renderiza o QRCode apenas se 'text' não estiver vazio */}
      {text && (
        <div className='qr-code-container'>
          <QRCode value={text} size={256} /> {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </div>
      )}
    </div>
  );
};

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;

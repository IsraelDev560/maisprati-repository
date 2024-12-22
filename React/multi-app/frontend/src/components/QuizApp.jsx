// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
import '../styles/QuizApp.css';

const QuizApp = () => {
  // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
  const questions = [
    {
      question: "What is 2+2?", // Pergunta da primeira questão.
      options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
      answer: "4", // Resposta correta para a primeira questão.
    },
    {
      question: "What is 3+3?", // Pergunta da segunda questão.
      options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
      answer: "6", // Resposta correta para a segunda questão.
    },
    {
      question: "What is 4+3?", // Pergunta da segunda questão.
      options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
      answer: "7", // Resposta correta para a segunda questão.
    },
  ];

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    // Verifica se a resposta fornecida está correta.
    if (answer === questions[currentQuestion].answer) {
      // Se a resposta estiver correta, aumenta a pontuação em 1.
      setScore(score + 1);
    } else{
      setScore(score - 1)
      
    }
    // Passa para a próxima pergunta.
    setCurrentQuestion(currentQuestion + 1);
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <div className='container'>
      <h2>Quiz App</h2>
      {currentQuestion < questions.length ? ( 
        <div>
          <p>{questions[currentQuestion].question}</p> 
          {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>{option}</button> 
          ))}
        </div>
      ) : (
        <p className='score'>Your score: {score}</p> 
      )}
    </div>
  );
};

// Exporta o componente QuizApp para que possa ser utilizado em outras partes da aplicação.
export default QuizApp;

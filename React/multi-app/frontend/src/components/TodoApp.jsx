// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import '../styles/TodoApp.css'


// Define o componente funcional TodoApp.
const TodoApp = () => {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(''); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

 // Função que busca as tarefas do localStorage e atualiza o estado
const fetchTasks = () => {
  try {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  } catch (error) {
    console.log("Não foi possível buscar as tarefas: " + error);
  }
};

// Use o hook useEffect para buscar as tarefas quando o componente for montado
useEffect(() => {
  fetchTasks();
}, []);


  // Função que adiciona uma nova tarefa.
  const addTask = async () => {
    try{
    if (task != null) { // Verifica se o campo da tarefa não está vazio.
      const id = new Date().getTime().toString(); // Gera um id único baseado no timestamp
      const newTask = { id, text: task }; // Cria um objeto de tarefa com o id e o texto fornecido.
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      storedTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
      setTasks(storedTasks); // Atualiza o estado com a nova tarefa adicionada.
      setTask(''); // Limpa o campo de entrada.
      console.log(newTask);
    }
  } catch(error){
    console.log("Não foi possível adicionar a tarefa: " + error);
  }
  };

  // Função que exclui uma tarefa.
const deleteTask = async (id) => {
  try {
    // Recupera a lista de tarefas existente
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Filtra a tarefa a ser excluída
    const updatedTasks = storedTasks.filter(task => task.id !== id);
    
    // Remove a tarefa do localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    // Atualiza o estado removendo a tarefa excluída
    setTasks(updatedTasks);
  } catch (error) {
    console.log("Não foi possível excluir a tarefa: " + error);
  }
};

  const clearAll = () => {
    try {
      // Limpa o localStorage
      localStorage.removeItem('tasks');
      
      // Limpa o estado
      setTasks([]);
    } catch (error) {
      console.log("Não foi possível limpar todas as tarefas: " + error);
    }
  };
  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText }; // Cria um objeto de tarefa com o texto atualizado.
 
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, text: editingTaskText } : task
    );


    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    // Atualiza o estado com a lista de tarefas modificada
    setTasks(updatedTasks);
    
    // Limpa o id e o texto da tarefa em edição
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <div className='container'>
      <h2>Todo App</h2> {/* Exibe o título do aplicativo de tarefas */}
      <input className='inputInit'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearAll}>Clear All Tasks</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <input
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;

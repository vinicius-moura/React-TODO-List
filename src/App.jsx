import { useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  return <div className='app'>
    <h1 className='title'>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <div className='todo'>
          <div className='content'>
            <p className='text'>{todo.text}</p>
            <p className='category'>({todo.category})</p>
          </div>
          <div className='buttons'>
            <button className='complete'>Completar</button>
            <button className='cancel'>X</button>
          </div>

        </div>
      ))}
    </div>
  </div>
}

export default App

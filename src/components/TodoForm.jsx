import { useState } from 'react'
import '../assets/styles/todoForm.scss';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue('');
    setCategory('');
  }

  return <div className='todo-form'>
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit} className='form'>
      <input type='text'
        className='form-element'
        placeholder='Digite o título'
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <select className='form-element'
      value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value='' disabled defaultValue hidden>Selecione uma categoria</option>
        <option value='Trabalho'>Trabalho</option>
        <option value='Pessoal'>Pessoal</option>
        <option value='Estudos'>Estudos</option>
      </select>
      <button type='submit'>Adicionar tarefa</button>
    </form>

  </div>

}

export default TodoForm

import React from 'react'
import '../assets/styles/todoForm.scss';

function TodoForm() {
  return <div className='todo-form'>
    <h2>Criar Tarefa</h2>
    <form className='form'>
        <input type='text' className='form-element' placeholder='Digite o título'/>
        <select className='form-element'>
            <option value='' disabled selected hidden>Selecione uma categoria</option>
            <option value='Trabalho'>Trabalho</option>
            <option value='Pessoal'>Pessoal</option>
            <option value='Estudos'>Estudos</option>
        </select>
        <button type='submit'>Adicionar tarefa</button>
    </form>

  </div>
  
}

export default TodoForm

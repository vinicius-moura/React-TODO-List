import React from 'react'
import '../assets/styles/todo.scss';

const Todo = ({ todo }) => {
    return (
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
    )
}

export default Todo

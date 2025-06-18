import React from 'react'
import '../assets/styles/todo.scss';

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo'>
            <div className={`content ${todo.isCompleted ? 'completed' : ''}`}>
                <p className='text'>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div className='buttons'>
                <button className='complete' onClick={() => completeTodo(todo.id)}>
                    Completar
                </button>
                <button className='cancel' onClick={() => removeTodo(todo.id)}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Todo

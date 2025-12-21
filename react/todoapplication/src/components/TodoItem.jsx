import React from 'react'

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
        <span onClick={()=> toggleTodo(todo.id)}>
            {todo.text}
        </span>
        <button onClick={()=>deleteTodo(todo.id)}>Delete Task</button>
    </li>
  )
}

export default TodoItem
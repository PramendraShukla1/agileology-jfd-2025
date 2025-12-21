import React, { useState } from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    if(text.trim() === "") return

    const newTodo = {
      id:Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) =>{
    const updatedTodo = todos.map((todo)=>
      todo.id === id ?
      {
        ...todo, completed: !todo.completed
      }: todo
    )
    setTodos(updatedTodo)
  }

  const deleteTodo = (id) =>{
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }
  return (
    <div className='app'>
      <div className='todo-container'>
        <h1>My To-Do List</h1>
        <TodoInput addTodo = {addTodo}/>
        <TodoList
        todos={todos}
        toggleTodo = {toggleTodo}
        deleteTodo={deleteTodo}
        />
        {
          todos.length === 0 && (
            <p className='empty'>No Tasks yet</p>
          )
        }
      </div>
    </div>
  )
}

export default App
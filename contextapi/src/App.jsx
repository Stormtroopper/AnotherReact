import { useState } from 'react'
import { ToDoProvider } from './context/TodoContext'
import './App.css'
import { useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodo] = useState([])
  //Context Functionality
  const addTodo = (todo) => {
    setTodo(prev => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodo(prev => {
      return prev.map((item) => item.id === id ? todo : item)
    })
  }
  const deleteTodo = (id) => {
    setTodo(prev => prev.filter((item) => item.id != id))
  }
  const toggleToDo = () => {
    setTodo(prev => prev.map((item) => item === id ? { ...item, completed: !item.completed } : item))
  }
  //Local Storage Functions
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleToDo }}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-3xl font-bold text-center mb-8 mt-3'>
            Hello World!
          </h1>
          <div className='mb-3'>
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-4'>
            {todos.map((todo) => (
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo} /></div>))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App

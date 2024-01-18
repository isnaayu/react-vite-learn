import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { TodoProvider } from './TodoContext'

export default function TodoApp() {
  return (
    <>
    <TodoProvider>
        <div>
            <TodoForm/>
            <TodoList/>
        </div>
    </TodoProvider>
    </>
  )
}

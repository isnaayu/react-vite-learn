import React from 'react'
import { useTodoContext } from './TodoContext'

export default function TodoList() {
    const {state, dispatch} = useTodoContext()
  return (
    <>
        <div>
            <ul>
                {state.todos.map((todo)=> (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch({type:"REMOVE_TODO", payload: todo.id})}>REMOVE</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

import React, { useState } from 'react'
import { useTodoContext } from './TodoContext'

export default function TodoForm() {
    const {dispatch} = useTodoContext()
    const [text, setText] = useState('')
    const [color, setColor] = useState({
        satuJam: '#00f',
        duaJam: '#f00',
        tigaJam: 'dark-brown'

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim() === '')return;
        const newTodo = {
            id: Date.now(),
            text
        }
        dispatch({type:"ADD_TODO", payload: newTodo})
        setText('')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='isi bos' value={text} onChange={(e)=> setText(e.target.value)}/>
            <button type='submit' style={{color: color.satuJam}}>Add</button>
            <button type='button' onClick={()=> setColor(color.duaJam)}>Berjemur</button>
        </form>
    </>
  )
}

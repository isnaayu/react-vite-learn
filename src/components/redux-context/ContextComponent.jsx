import React from 'react'
import { useMyContext } from './context'

export default function ContextComponent() {
    const [data, setData] = useMyContext()

    const handleClick = () => {
        increment({...data, counter: data.counter+1})
    }
  return (
    <>
    <div>
        <p>{data.counter}</p>
        <button onClick={handleClick}>Increment Context</button>
    </div>
    </>
  )
}

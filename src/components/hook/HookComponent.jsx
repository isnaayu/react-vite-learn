import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function HookComponent() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const myRef = useRef(null)
    const [inputValue, setInputValue] = useState("")
    useEffect(()=> {
        setTimeout(() => {
            setCount(count+1)
        }, 3000)
    }, [count])

    useEffect(()=> {
        myRef.current.focus()
    }, [])

    const handleClick =() => {
        myRef.current.style.backgroundColor = 'blue'
    }

    const handleCount = useCallback(()=> {
        setCount2(count2 + 1)
    }, [count])
  return (
    <>
    <h1>Saya sudah dirender {count} kali</h1>
    <button onClick={()=> setCount(count+1)}>Render</button>
    <div>
        <div>
            <input type="text" ref={myRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleClick}>Change Color</button>
        </div>
    </div>
    <div>
        <p>{count2}</p>
        <ChildComponent handleCount={handleCount}/>
    </div>
    </>
  )
}

function ChildComponent({handleCount}){
    return (
        <>
        <button onClick={handleCount}>add without render</button>
        </>
    )
}

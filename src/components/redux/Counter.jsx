import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./reduce"

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state => state.counter.count))

    return (
        <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    )
}

export default Counter
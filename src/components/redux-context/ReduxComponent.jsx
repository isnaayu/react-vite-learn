import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './reduxSlice'

export default function ReduxComponent() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    const handleClick = () => {
        dispatch(increment())
    }
  return (
    <>
        <div>
            <p>{counter}</p>
            <button onClick={handleClick}>Increment Redux</button>
        </div>
    </>
  )
}

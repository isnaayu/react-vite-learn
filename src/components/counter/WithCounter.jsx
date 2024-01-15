import React, { useState } from 'react'

const WithCounter = (WrappedComponent) => {
  return props => {
    const[count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return(
        <WrappedComponent
            count = {count}
            incrementCount = {incrementCount}
            {...props}
        />
    )
  }
}

export default WithCounter
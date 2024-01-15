import React from 'react'

const ClickCounter = ({count, incrementCount}) => {
  return (
    <div onClick={incrementCount} className='btn btn-primary ms-2 mt-2'>Click {count} times</div>
  )
}

export default ClickCounter
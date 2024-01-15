import React from 'react'

const HoverCounter = ({count, incrementCount}) => {
  return (
    <div onMouseOver={incrementCount} className='btn btn-success ms-2 mt-2'>Hover {count} times</div>
  )
}

export default HoverCounter

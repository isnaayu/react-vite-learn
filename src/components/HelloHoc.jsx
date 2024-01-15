import React from 'react'
import SimpleComponent from './SimpleComponent'

const HelloHoc = () => {
  return (
    <div>HelloHoc</div>
  )
}

export default SimpleComponent(HelloHoc)
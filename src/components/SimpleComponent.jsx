import React, { Component } from 'react'

const SimpleComponent = (WrappedComponent) => {
  return class extends React.Component{
    render(){
        return <WrappedComponent/>
    }
  }
}

export default SimpleComponent
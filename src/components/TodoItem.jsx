import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {todo, onRemoveTodo}= this.props
    return (
      <>
        {todo}
        <button onClick={()=>{onRemoveTodo(todo)}}>Hapus</button>
      </>
    )
  }
}

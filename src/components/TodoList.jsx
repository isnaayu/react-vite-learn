import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const {todos, onRemoveTodo} = this.props
    return (
      <>
        {todos.map((todo, index)=> {
            return <TodoItem key={index} todo={todo} onRemoveTodo={onRemoveTodo}/>
        })}
      </>
    )
  }
}

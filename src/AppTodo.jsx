import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Parent from './components/Parent'
import Child from './components/Child'
import Form from './components/Form'
import TodoList from './components/TodoList'

class AppTodo extends Component {

  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }

  removeTodo = (todoToRemove) => {
    this.setState({todos: this.state.todos.filter(todo => todo !== todoToRemove)})
  }
  render(){
    return (
      <>
        {/* <Header/> */}
        <Home />
        <Form onAddTodo={this.addTodo}/>
        <TodoList onRemoveTodo={this.removeTodo} todos={this.state.todos}/>
        {/* <Home name='Isna Ayu Muarofah' title="Welcome"/> */}
        {/* <Home name='Isna Ayu' address="Ragunan" age="22"/> */}
        {/* <Parent name="Andi" address="Ragunan" age="23"/> */}
        {/* <Child name="Isna" address="Ragunan" age="23"/> */}
  
  
      </>
    )
  }
  
}

export default AppTodo

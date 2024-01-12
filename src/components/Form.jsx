import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.text){
            this.props.onAddTodo(this.state.text)
            this.setState({text: ''})
        }
    }
  render() {
    // let listItem = this.state.list.map((number)=>{
    //     return <li key={number.id}>{number.value}</li>
    // })
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" value={this.state.text} onChange={this.handleChange} />
            <button type='submit'>SUBMIT</button>
        </form>
      </>
    )
  }
}

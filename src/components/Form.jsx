import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            newItem: "",
            list: []
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            id: 1+Math.random,
            value: this.state.newItem.slice()
        }

        const list = [...this.state.list]
        list.push(newItem)
        this.setState({
            list
        })

        this.setState({
            newItem: ''
        })
    }
  render() {
    let listItem = this.state.list.map((number)=>{
        return <li key={number.id}>{number.value}</li>
    })
    return (
      <>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" value={this.state.newItem} onChange={e => this.handleChange("newItem", e.target.value)} />
            <input type="submit" value="SUBMIT" onClick={this.handleSubmit} />
        </form>
        <ul>
            {listItem}
        </ul>
      </>
    )
  }
}

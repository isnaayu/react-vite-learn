import { Component } from 'react'

class Child extends Component {
  render() {
    const {name, address, age} = this.props
    return (
      <div>
        <h1>Halo, Nama Saya {name}, saya tinggal di {address}. Saya Berumur {age}</h1>
      </div>
    )
  }
}

export default Child

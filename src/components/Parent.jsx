import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    // const { name, address, age } = this.props;
    return (
      <div>
        <Child name={this.props.name} address={this.props.address} age={this.props.age} />
      </div>
    );
  }
}

export default Parent;

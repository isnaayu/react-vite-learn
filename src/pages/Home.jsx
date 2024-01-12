import { Component } from "react";

// Props & State (component)
// Statefull Component -> class component yang memeliki sebuah state
// Stateless Component ->  functional Componen

// LIfeCycle Component
// 1. Mounting -> Fase dimana component ini dirender kedalam DOM (Constrctor, render, dll)
// 2. Update
// 3. Unmounting
class Home extends Component {
  constructor(props) {
    console.log("Home.constructor is called");
    super(props);
    this.state = {
      name: "x",
      button: "Show Name",
      address: "Ragunan",
      show: true
    };
  }

  showButton = () => {
    const newName = this.state.name === "x" ? "Jake" : "x";
    const newButton =
      this.state.button === "Show Name" ? "Hide Name" : "Show Name";
    this.setState({ name: newName });
    this.setState({ button: newButton });
  };

  static getDerivedStateFromProps(state, props) {
    console.log("Home.getDerivedStateFromProps is Called");
    console.log("props: ", props);
    console.log("state: ", state);
    return null;
  }

  componentDidMount() {
    console.log("Home.ComponentDidMunt is called");
  }

  changeAddress = () =>{
    // this.forceUpdate({address: "Jaksel"})
    
    this.setState({ address: "singapura" });
  }

  shouldComponentUpdate(){
    console.log(this.state.address)
    return true;
  }

  // getSnapshotBeforeUpdate(){
  //   console.log("ini getSnapshotBeforeUpdate")
  //   document.getElementById("h2").innerHTML = "<h1>ini getSnapshotBeforeUpdate</h1>"
  // }

  // componentDidUpdate(){
  //   console.log("ini componenDidUpdate")
  //   document.getElementById("h1").innerHTML = "<h1>ini componenDidUpdate</h1>"
  // }

  

  delete = () =>{
    this.setState({show: false})
  }

  render() {
    let myHeader
    if (this.state.show) {
      myHeader = <NewChild/>
    }
    // const {name, title} = this.props
    // const {name, address, age} = this.props

    // console.log('props:', this.props.name)
    console.log("Home.render is called");
    return (
      
      <div className="container mt-5">
        {myHeader}
        <h1>
          Hello,{" "}
          <span className="name badge text-bg-primary">{this.state.name}</span>
        </h1>
        {/* <button
          className="btn btn-primary"
          onClick={() => this.setState({ name: "Jake" })}
        >
          Show Name
        </button> */}
        <button className="btn btn-primary" onClick={this.showButton}>
          {this.state.button}
        </button>

        <button className="btn btn-primary" onClick={this.changeAddress}>
          {this.state.address}
        </button>

        <div id="h1"></div>
        <div id="h2"></div><br />
        <button className="btn btn-primary" onClick={this.delete}>
          DELETE
        </button>

      </div>
    );
  }
}

class NewChild extends Component{
  componentWillUnmount(){
    console.log("ini componenWillUnmount")
    alert('komponen dihapus')
  }

  render(){
    return (
      <div>
        this is a child
      </div>
    )
  }
}

export default Home;

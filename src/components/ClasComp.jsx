import React, { Component } from 'react'

export default class ClasComp extends Component {

  constructor(props) {
    super(props) //pass props to parent constructor of class component

    this.state = {
      name : "Muneeb",
      age : 22
    };
  
  }
  render() {

    // const {name, age} = this.state;

    return (
      <div>
        <h1>Class Component</h1>

        <h2>Name is {this.state.name}</h2>
        <h2>Age is {this.state.age}</h2>
        <h2>Passion is {this.props.passion}</h2>

        {/* <h2>Name is {name}</h2>
        <h2>Age is {age}</h2> */}
      </div>
    )
  }
}

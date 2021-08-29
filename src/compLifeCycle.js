import React, { Component } from "react";
class CompLifeCycle extends Component {
  
  static getDerivedStateFromProps(props, state) {
    console.log("props ", props.selected);
    console.log("state selected:", state.selected)

    // cannot use this!!!! it's a static method
    if (props.selected !== state.selected) {
        console.log("props selected: ", props.selected);
      return {
        id: props.id,
        selected: props.selected
      };
    }
    return null;
  }
  
  // Phase1: mouting
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Phase1: mouting
  componentDidMount() {
    console.log("didMount");
  }

  // Phase2: updating
  componentDidUpdate() {
    console.log("updated");
  }

  // shouldComponentUpdate(){
  //     console.log('should');
  // }

  updateData = () => {
    this.setState((state) => ({ id: state.id + 1 }));
  };

  shouldComponentUpdate() {
    console.log("should");
    if (this.state.id < 5) {
      return true;
    } else {
      console.log("you cannot update state");
      return false;
    }
  }

  render() {
    return (
      <div>
        <h1> lifeCycle </h1>
        id: {this.state.id}
        <button onClick={this.updateData}> update </button>
      </div>
    );
  }
}

export default CompLifeCycle;

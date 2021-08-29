import React, { Component } from "react";
class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      name: localStorage["name"],
      phone: localStorage["phone"],
    });
  }

  navigate = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Finish PAGE</h1>
        <h2> YOUR NAME : {this.state.name} </h2>
        <h2> YOUR PHONE : {this.state.phone} </h2>
        <button onClick={this.navigate}> back to home </button>
      </div>
    );
  }
}

export default Finish;

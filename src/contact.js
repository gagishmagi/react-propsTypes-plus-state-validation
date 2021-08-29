import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  savePhone = (e) => {
    localStorage["phone"] = e.target.value;
  };

  navigate = () => {
    this.props.history.push("/finish");
  };

  render() {
    return (
      <div>
        <h1>Contact PAGE</h1>
        <input
          type="number"
          placeholder="your phone..."
          onChange={this.savePhone}
        />
        <button onClick={this.navigate}> NAVIGATE </button>
      </div>
    );
  }
}

export default Contact;

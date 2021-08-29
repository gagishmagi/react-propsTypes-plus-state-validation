import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveName = (e) => {
    localStorage["name"] = e.target.value;
  };
  navigate = () => {
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div>
        <h1>About PAGE</h1>
        <input
          type="text"
          placeholder="your name..."
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}> NAVIGATE </button>
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>

        <Link to="/about"> ABOUT </Link>
      </div>
    );
  }
}

export default Home;

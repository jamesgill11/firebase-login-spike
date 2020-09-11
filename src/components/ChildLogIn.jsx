import React, { Component } from "react";

class ChildLogin extends Component {
  state = {
    uniqueID: 0,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  onClick = (event) => {
    //get request for parents unique id
  };
  render() {
    return (
      <div>
        <h1>Child Login</h1>
        <h2>Please put in 4 digit code</h2>
        <form action="">
          <input type="number" name="uniqueID" onChange={this.handleChange} />
          <button>Send Code</button>
        </form>
      </div>
    );
  }
}

export default ChildLogin;

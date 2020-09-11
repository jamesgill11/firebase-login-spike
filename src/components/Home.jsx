import React, { Component } from "react";
import Fire from "../Fire";
class Home extends Component {
  logout = () => {
    Fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.logout}>LogOut</button>
      </div>
    );
  }
}

export default Home;

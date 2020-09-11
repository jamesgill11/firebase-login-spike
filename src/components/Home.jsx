import React, { Component } from "react";
import Fire from "../Fire";
class Home extends Component {
  state = {
    childName: "",
    uniqueId: 0,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  logout = () => {
    Fire.auth().signOut();
  };
  handeClick = (event) => {
    event.preventDefault();
    const uniqueId = Math.floor(1000 + Math.random() * 9000);
    this.setState({ uniqueId });
    //then we will post unqiue Id to parent table
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h2>Create Child account</h2>
        <form action="">
          <label htmlFor="childName">Child Name: </label>
          <input type="text" name="childName" onChange={this.handleChange} />

          <button onClick={this.handeClick}>Create Account</button>
        </form>
        <button onClick={this.logout}>LogOut</button>
      </div>
    );
  }
}

export default Home;

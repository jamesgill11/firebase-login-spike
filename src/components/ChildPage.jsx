import React, { Component } from "react";

class ChildPage extends Component {
  state = { unquieID: 0 };

  componentDidMount = () => {
    // or uses props.uniqueID to get request tasks, stars...
  };
  render() {
    return <div>Child Page</div>;
  }
}

export default ChildPage;

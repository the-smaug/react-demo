import React, { Component } from "react";

import "./styles/Pressable.css";

class Pressable extends Component {
  render() {
    return <button>{this.props.value}</button>;
  }
}

export default Pressable;

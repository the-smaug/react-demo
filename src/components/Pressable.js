import React, { Component } from "react";

import "./styles/Pressable.css";

class Pressable extends Component {
  render() {
    const { props } = this;
    return (
      <button className="Pressable" {...props}>
        {props.value}
      </button>
    );
  }
}

export default Pressable;

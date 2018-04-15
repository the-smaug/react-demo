import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return <li {...this.props}>{this.props.children}</li>;
  }
}

export default ListItem;

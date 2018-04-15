import React, { Component } from "react";

import "./styles/ListItem.css";

class ListItem extends Component {
  render() {
    const { props } = this;

    return (
      <li className={`${props.classprop} ListItem`} {...props}>
        {props.children}
      </li>
    );
  }
}

export default ListItem;

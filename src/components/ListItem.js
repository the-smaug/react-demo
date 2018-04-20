import React, { Component } from 'react'

import './styles/ListItem.css'

class ListItem extends Component {
  render () {
    const { props } = this

    return (
      <div className={`${props.classprop} ListItem`} {...props}>
        {props.children}
      </div>
    )
  }
}

export default ListItem

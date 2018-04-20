import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.button`
  border: 2px solid grey;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  outline: none;
  margin: auto;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-shadow: 0 0 2px #000;
  letter-spacing: 1px;
  color: white;
  transition: all 0.25s ease;
  background: ${props => `url(${props.backgroundurl})`};

  &:active {
    border-color: white;
    color: grey;
    text-shadow: 0 0 2px #fff;
    transform: scale(1.05);
    transition: all 0.25s ease;
  }
`

class Pressable extends Component {
  render () {
    const { props } = this
    return (
      <Item {...props} style={{ backgroundSize: 'cover' }}>
        {props.value}
      </Item>
    )
  }
}

export default Pressable

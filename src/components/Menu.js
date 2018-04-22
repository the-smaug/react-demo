import React, { Component } from 'react'
import styled from 'styled-components'
import { observer, inject } from 'mobx-react'

const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: white;
`

const UploadButton = styled.button`
  outline: none;
`

@inject('appStore')
@observer
class Menu extends Component {
  render () {
    return (
      <Navbar>
        <UploadButton
          onClick={() => {
            this.props.appStore.toggleUploaderStatus()
          }}
        >
          Uploader
        </UploadButton>
      </Navbar>
    )
  }
}

export default Menu

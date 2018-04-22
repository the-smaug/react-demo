import React, { Component } from 'react'

class Modal extends Component {
  state = {
    isOpen: false
  }

  toggleModal = () => {
    this.setState(prevSrate => ({
      isOpen: !prevSrate.isOpen
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.toggleModal}>Afficher / Cacher la modale</button>
        <div
          style={{
            opacity: this.state.isOpen ? 1 : 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(10, 10, 10, 0.3)'
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal

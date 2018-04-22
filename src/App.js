import React, { Component } from 'react'
import Example from './components/Example'

class App extends Component {
  state = {
    items: [],
    playingItem: null,
    refs: []
  }

  render () {
    return (
      <div className='App'>
        <Example>Hello</Example>
      </div>
    )
  }
}

export default App

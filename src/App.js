import React, { Component } from 'react'
import styled from 'styled-components'

import ListItem from './components/ListItem'
import Pressable from './components/Pressable'
import { storage } from './config/firebase'
import files from './config/files'

import './App.css'

const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 10px;
`

class App extends Component {
  state = {
    items: [],
    playingItem: null,
    refs: []
  }

  constructor () {
    super()
    this.sounds = {}

    files.forEach((_, key) => {
      this.sounds[key] = React.createRef()
    })
  }

  async componentDidMount () {
    const soundsUrl = await Promise.all(
      files.map(async ({ sound, title, image }) => {
        const soundRef = storage.ref(sound)
        const soundUrl = await soundRef.getDownloadURL()

        const imageRef = storage.ref(image)
        const imageUrl = await imageRef.getDownloadURL()
        return { soundUrl, title, imageUrl }
      })
    )

    this.setState({
      items: soundsUrl
    })
  }

  playSound = soundKey => {
    this.sounds[soundKey].current.play()
  }

  endPlay = () => {
    this.setState({
      playingItem: null
    })
  }

  render () {
    return (
      <div className='App'>
        {this.state.items.map(({ title, soundUrl, imageUrl }, key) => {
          return (
            <Wrapper key={key}>
              <ListItem>
                <Pressable
                  onClick={() => {
                    this.playSound(key)
                  }}
                  value={title}
                  backgroundurl={imageUrl}
                />
                <audio ref={this.sounds[key]} src={soundUrl}>
                  Votre navigateur ne supporte pas l'élément <code>audio</code>.
                </audio>
              </ListItem>
            </Wrapper>
          )
        })}
      </div>
    )
  }
}

export default App

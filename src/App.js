import React, { Component } from "react";

import ListItem from "./components/ListItem";
import Pressable from "./components/Pressable";
import { storage } from "./config/firebase";
import files from "./config/files";

import "./App.css";

class App extends Component {
  state = {
    items: [],
    playingItem: null,
    refs: []
  };

  constructor() {
    super();
    this.sounds = {};

    files.forEach((_, key) => {
      this.sounds[key] = React.createRef();
    });
  }

  async componentDidMount() {
    const soundsUrl = await Promise.all(
      files.map(async ({ sound, title }) => {
        const soundsRef = storage.ref(sound);
        const soundUrl = await soundsRef.getDownloadURL();
        return { soundUrl, title };
      })
    );

    this.setState({
      items: soundsUrl
    });
  }

  playSound = soundKey => {
    this.sounds[soundKey].current.play();
  };

  endPlay = () => {
    this.setState({
      playingItem: null
    });
  };

  render() {
    return (
      <ul className="App">
        {this.state.items.map(({ title, soundUrl }, key) => {
          return (
            <ListItem classprop="App__ListItem" key={key}>
              <Pressable
                onClick={() => {
                  this.playSound(key);
                }}
                value={title}
              />
              <audio ref={this.sounds[key]} src={soundUrl}>
                Votre navigateur ne supporte pas l'élément <code>audio</code>.
              </audio>
            </ListItem>
          );
        })}
      </ul>
    );
  }
}

export default App;

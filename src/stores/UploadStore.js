import { observable, action } from 'mobx'

class UploadStore {
  sound = observable.box('')
  image = observable.box('')

  @action
  setSound (sound) {
    this.sound.set(sound)
  }

  @action
  setImage (image) {
    this.image.set(image)
  }
}

export default new UploadStore()

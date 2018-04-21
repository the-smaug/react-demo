import { observable, computed, action } from 'mobx'

class AppStore {
  uploaderStatus = observable.box(false)

  @computed
  get isUploaderOpen () {
    return this.uploaderStatus.get()
  }

  @action
  toggleUploaderStatus () {
    this.uploaderStatus.set(!this.uploaderStatus.get())
  }
}

export default new AppStore()

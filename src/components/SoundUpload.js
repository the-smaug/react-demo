import React, { PureComponent } from 'react'

class ImageUpload extends PureComponent {
  state = { file: '', audioPreviewUrl: '' }

  componentDidUpdate () {
    if (this.props.fileCallback) {
      this.props.fileCallback(this.state.file)
    }
  }

  handleSoundChange (e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    if (file.type.includes('audio')) {
      reader.onloadend = () => {
        console.log(reader)
        this.setState({
          file: file,
          audioPreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  render () {
    const s = document.getElementById('toto')
    if (s) {
      console.log(s.attributes)
    }

    return (
      <input
        type='file'
        onChange={e => {
          this.handleSoundChange(e)
        }}
      />
    )
  }
}

export default ImageUpload

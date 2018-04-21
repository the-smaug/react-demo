import React, { PureComponent } from 'react'

class ImageUpload extends PureComponent {
  state = { file: '', imagePreviewUrl: '' }

  componentDidUpdate () {
    this.props.imageCallback(this.state.file)
  }

  handleImageChange (e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    console.log(file)
    if (file.type.includes('image')) {
      reader.onloadend = () => {
        console.log(reader)
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  render () {
    let { imagePreviewUrl } = this.state

    return (
      <div
        style={{
          width: '150px',
          height: '150px',
          background: imagePreviewUrl ? 'transparent' : '#888',
          borderRadius: '50%',
          position: 'relative',
          border: '1px solid grey'
        }}
      >
        <input
          style={{
            opacity: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            zIndex: 1000,
            position: 'absolute',
            top: 0,
            left: 0
          }}
          type='file'
          onChange={e => this.handleImageChange(e)}
        />

        <img
          style={{
            opacity: imagePreviewUrl ? 1 : 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100
          }}
          src={imagePreviewUrl || ''}
        />
      </div>
    )
  }
}

export default ImageUpload

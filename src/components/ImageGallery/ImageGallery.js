import React, { Component } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-image-lightbox'
import Thumbnail from './Thumbnail'

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1920px;
  margin: 0 auto;

  > * {
    flex-basis: 25%;
    max-width: 25%;
  }
`

class ImageGallery extends Component {
  state = {
    photoIndex: 0,
    lightBoxOpen: false
  }

  imagePath = index => {
    const { path, ids, fileExtension = 'jpg' } = this.props

    return `${path}/${ids[index]}.${fileExtension}`
  }

  getNextIndex = index => {
    const { ids } = this.props
    return (index + 1) % ids.length
  }

  nextImage = () => {
    this.setState(prevState => ({
      photoIndex: this.getNextIndex(prevState.photoIndex)
    }))
  }

  getPrevIndex = index => {
    const { ids } = this.props
    return (index + ids.length - 1) % ids.length
  }

  prevImage = () => {
    this.setState(prevState => ({
      photoIndex: this.getPrevIndex(prevState.photoIndex)
    }))
  }

  openLightBox = () => {
    this.setState({ lightBoxOpen: true })
  }

  render() {
    const { path, ids = [], fileExtension = 'jpg' } = this.props
    const { lightBoxOpen, photoIndex } = this.state
    return (
      <Gallery>
        {ids.map(id => (
          <Thumbnail
            key={id}
            id={id}
            path={path}
            fileExtension={fileExtension}
            onClick={this.openLightBox}
          />
        ))}
        {lightBoxOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={this.imagePath(photoIndex)}
            nextSrc={this.imagePath(this.getNextIndex(photoIndex))}
            prevSrc={this.imagePath(this.getPrevIndex(photoIndex))}
            onCloseRequest={() => this.setState({ lightBoxOpen: false })}
            onMovePrevRequest={this.nextImage}
            onMoveNextRequest={this.prevImage}
          />
        )}
      </Gallery>
    )
  }
}

export default ImageGallery

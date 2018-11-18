import React, { Component } from 'react'
import styled from 'styled-components'

import { media } from '../../styles'
import Thumbnail from './Thumbnail'

let Lightbox = () => null
if (typeof document !== 'undefined') {
  Lightbox = require('react-image-lightbox').default
}

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1920px;
  margin: 0 auto;

  > * {
    flex-basis: 100%;
    max-width: 100%;
    height: 250px;
  }

  ${media.small`
    > * {
      flex-basis: 50%;
      max-width: 50%;
    }
  `}

  ${media.medium`
    > * {
      flex-basis: 33.3%;
      max-width: 33.3%;
      height: 300px;
    }
  `}

  ${media.large`
    > * {
      flex-basis: 25%;
      max-width: 25%;
    }
  `}
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

  openLightBox = id => {
    this.setState({ photoIndex: id, lightBoxOpen: true })
  }

  render() {
    const { path, ids = [], fileExtension = 'jpg' } = this.props
    const { lightBoxOpen, photoIndex } = this.state

    return (
      <Gallery>
        {ids.map((id, index) => (
          <Thumbnail
            key={id}
            id={id}
            index={index}
            path={path}
            fileExtension={fileExtension}
            onClick={id => this.openLightBox(id)}
          />
        ))}
        {lightBoxOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={this.imagePath(photoIndex)}
            prevSrc={this.imagePath(this.getNextIndex(photoIndex))}
            nextSrc={this.imagePath(this.getPrevIndex(photoIndex))}
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

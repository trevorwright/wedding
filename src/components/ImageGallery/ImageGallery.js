import React from 'react'
import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    flex-basis: 25%;
  }
`

const ImageGallery = ({ path, ids = [], fileExtension = 'jpg' }) => (
  <Gallery>
    {ids.map(id => (
      <Thumbnail key={id} id={id} path={path} fileExtension={fileExtension} />
    ))}
  </Gallery>
)

export default ImageGallery

import React from 'react'
import styled from 'styled-components'

const Image = styled.img``

const ImageGallery = ({ path, ids = [], fileExtension = 'jpg' }) => (
  <div>
    {ids.map(id => (
      <Image src={`${path}/thumbnails/${id}.${fileExtension}`} />
    ))}
  </div>
)

export default ImageGallery

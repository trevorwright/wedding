import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 300px;
  padding: 2px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  }
`

const Thumbnail = ({ id, path, fileExtension, onClick }) => (
  <Image src={`${path}/thumbnails/${id}.${fileExtension}`} onClick={onClick} />
)

export default Thumbnail

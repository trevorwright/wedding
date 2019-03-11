import { css } from 'styled-components'

export default color => css`
  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: ${color};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`

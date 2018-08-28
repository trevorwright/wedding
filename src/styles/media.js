import { css } from 'styled-components'

// reference: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
export const SIZES = {
  larger: 1366,
  large: 1024,
  medium: 770,
  small: 512,
  smallest: 320
}

export const MAX_APP_WIDTH = '1367px'

// iterate through the SIZES and create a media template
export const media = Object.keys(SIZES).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = SIZES[label] / 16
  const acc = accumulator
  acc[label] = (...args) =>
    css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `

  const emSizeDown = (SIZES[label] - 1) / 16
  acc[`${label}Down`] = (...args) =>
    css`
      @media (max-width: ${emSizeDown}em) {
        ${css(...args)};
      }
    `
  return acc
}, {})

media.break = size => {
  const emSize = size / 16
  return (...args) =>
    css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
}

media.breakBetween = (from, to) => (...args) => {
  const minEm = SIZES[from] / 16
  const maxEm = SIZES[to] / 16
  return css`
    @media (min-width: ${minEm}em) and (max-width: ${maxEm}em) {
      ${css(...args)};
    }
  `
}

export default media

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 16px;
  border: 1px solid #999999;
  border-radius: 5px;
  padding: 4px 8px 2px 8px;
  background: white;
  transition: background 0.3s;
  box-shadow: 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }

  &:disabled {
    background: white;
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>

export default Button

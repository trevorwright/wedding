import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Label from './Label'
import Input from './Input'
import ErrorIcon from './ErrorIcon'
import { RadioInput, RadioLabel } from './Radio'
import { media } from '../../../styles'

const Container = styled.div`
  position: relative;
  grid-column: 1 / span 2;

  > *:not(:last-child) {
    margin-bottom: 24px;
  }

  ${media.medium`
    grid-column: initial;
  `};
`

const FoodRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const RemoveGuest = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999999;
  right: 0;
  top: 0;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #f7f7f7;
  }
`

const RemoveIcon = styled.i.attrs({
  className: 'fas fa-times'
})``

const Guest = ({
  id,
  onMealChanged,
  meal,
  name,
  onNameChanged,
  removable,
  onRemove,
  nameError,
  mealError
}) => (
  <Container>
    {removable && (
      <RemoveGuest onClick={onRemove}>
        <RemoveIcon />
      </RemoveGuest>
    )}
    <Header>Guest {id}</Header>
    <Label>
      <div>
        {nameError && <ErrorIcon />}
        Full Name
      </div>
      <Input value={name} name={`name${id}`} onChange={onNameChanged} />
    </Label>
    <FoodRadioGroup>
      <Label>
        <div>
          {mealError && <ErrorIcon />}
          Meal Selection
        </div>
      </Label>
      <RadioLabel>
        <RadioInput
          name={`meal${id}`}
          value="chicken"
          onChange={onMealChanged}
          checked={meal === 'chicken'}
        />
        Chicken
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          name={`meal${id}`}
          value="beef"
          onChange={onMealChanged}
          checked={meal === 'beef'}
        />
        Beef
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          name={`meal${id}`}
          value="vegetarian"
          onChange={onMealChanged}
          checked={meal === 'vegetarian'}
        />
        Vegetarian
      </RadioLabel>
    </FoodRadioGroup>
  </Container>
)

export default Guest

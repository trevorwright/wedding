import React, { Component } from 'react'
import styled from 'styled-components'
import {
  differenceInMonths,
  subMonths,
  differenceInDays,
  subDays,
  differenceInHours,
  subHours,
  differenceInMinutes,
  subMinutes,
  differenceInSeconds,
  isAfter
} from 'date-fns'
import { media } from '../../styles'

import { Hero } from '../../components'
import countdownLargeImage from '../../../assets/countdown/large.jpg'
import CountDownItem from './CountDownItem'

const WEDDING_DATE = new Date(2019, 7, 9, 15)

const Message = styled.h4`
  width: 100%;

  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  text-align: center;

  ${media.small`
    font-size: 30px;
  `};

  ${media.medium`
    font-size: 40px;
  `};
`

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px auto 0 auto;
  padding: 0 16px;
  max-width: 900px;
`
class Countdown extends Component {
  state = {
    monthsLeft: 0,
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    secondsLeft: 0
  }

  componentDidMount() {
    this.calculateTimeRemaining()
    this.updateInterval = setInterval(() => this.calculateTimeRemaining(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  calculateTimeRemaining() {
    const now = new Date()
    let unaccountedTime = new Date()

    const monthsLeft = differenceInMonths(WEDDING_DATE, unaccountedTime)
    unaccountedTime = subMonths(WEDDING_DATE, monthsLeft)

    const daysLeft = differenceInDays(unaccountedTime, now)
    unaccountedTime = subDays(unaccountedTime, daysLeft)

    const hoursLeft = differenceInHours(unaccountedTime, now)
    unaccountedTime = subHours(unaccountedTime, hoursLeft)

    const minutesLeft = differenceInMinutes(unaccountedTime, now)
    unaccountedTime = subMinutes(unaccountedTime, minutesLeft)

    const secondsLeft = differenceInSeconds(unaccountedTime, now)

    this.setState({ monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft })
  }

  render() {
    const { monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft } = this.state

    if (isAfter(new Date(), WEDDING_DATE)) {
      return (
        <Hero name="countdown" image={countdownLargeImage}>
          Officially married!!!
        </Hero>
      )
    }

    return (
      <Hero name="countdown" image={countdownLargeImage}>
        <Message>Forever starts here</Message>
        <CountdownContainer>
          <CountDownItem label="Months">{monthsLeft}</CountDownItem>
          <CountDownItem label="Days">{daysLeft}</CountDownItem>
          <CountDownItem label="Hours">{hoursLeft}</CountDownItem>
          <CountDownItem label="Minutes">{minutesLeft}</CountDownItem>
          <CountDownItem label="Seconds">{secondsLeft}</CountDownItem>
        </CountdownContainer>
      </Hero>
    )
  }
}

export default Countdown

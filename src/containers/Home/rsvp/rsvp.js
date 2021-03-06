/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-useless-escape */
import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { size, map, uniqueId, filter } from 'lodash'
import Cookies from 'js-cookie'
import { scroller } from 'react-scroll'
import Attendance from './Attendance'
import Guest from './Guest'
import Additional from './Additional'
import Decline from './Decline'
import AddGuest from './AddGuest'
import ErrorIcon from './ErrorIcon'
import SubmissionComplete from './SubmissionComplete'
import SubmitError from './SubmitError'
import Registry from './Registry'
import { Section, Button } from '../../../components'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const sectionStyles = css`
  background: #f7e9e7;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
  grid-gap: 24px;

  ${props =>
    props.submitting &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 6px 6px 15px -6px rgba(0, 0, 0, 0.75);
  background: white;
  padding: 12px 24px;
  width: 100%;
`

const SubmitButton = styled(Button)`
  grid-column: 1 / span 2;
`

const Divider = styled.hr`
  grid-column: 1 / span 2;
  visibility: hidden;
`

const ErrorsLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  text-align: left;
  grid-column: 1 / span 2;
  color: #e74c3c;

  i {
    margin-top: 4px;
  }
`

const ErrorsList = styled.ul`
  margin-left: 16px;
  list-style: disc;
`

const ErrorMessage = styled.li``

class rsvp extends Component {
  state = {
    attending: 'yes',
    nameOne: '',
    mealOne: '',
    secondGuest: false,
    nameTwo: '',
    mealTwo: '',
    email: '',
    bookedHotel: '',
    comments: '',
    errors: {},
    submit: Cookies.get('rsvp') ? 'complete' : null
  }

  onNameChanged = (id, event) => {
    this.setState({ [`name${id}`]: event.target.value })
  }

  onMealChanged = (id, event) => {
    this.setState({ [`meal${id}`]: event.target.value })
  }

  onHotelBookedChanged = event => {
    this.setState({ bookedHotel: event.target.value })
  }

  onEmailChanged = event => {
    this.setState({ email: event.target.value })
  }

  setSecondGuest = value => {
    if (!value) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          nameTwo: undefined,
          mealTwo: undefined
        }
      }))
    }

    this.setState({ secondGuest: value })
  }

  onCommentsChanged = event => {
    this.setState({ comments: event.target.value })
  }

  onAttendingChanged = event => {
    this.setState({ attending: event.target.value, errors: {} })
  }

  validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  validateForm = () => {
    const {
      attending,
      nameOne = '',
      mealOne = '',
      nameTwo = '',
      mealTwo = '',
      secondGuest,
      email = '',
      bookedHotel = ''
    } = this.state
    const formErrors = {}

    if (attending === 'yes') {
      if (!nameOne.trim()) {
        formErrors.nameOne = 'Guest one must have a full name provided'
      }

      if (!mealOne.trim()) {
        formErrors.mealOne = 'Guest one must select a meal'
      }

      if (secondGuest) {
        if (!nameTwo.trim()) {
          formErrors.nameTwo = 'Guest two must have a full name provided'
        }

        if (!mealTwo.trim()) {
          formErrors.mealTwo = 'Guest two must select a meal'
        }
      }

      if (!this.validateEmail(email.trim())) {
        formErrors.email = 'Provide a valid email address we can contact you at'
      }

      if (!bookedHotel.trim()) {
        formErrors.bookedHotel = 'Let us known if you booked at the Holiday Inn'
      }
    } else {
      if (!nameOne.trim()) {
        formErrors.nameOne = 'Please leave us your name'
      }

      if (!this.validateEmail(email.trim())) {
        formErrors.email = 'Provide a valid email address we can contact you at'
      }
    }

    this.setState({ errors: formErrors })

    return !size(formErrors)
  }

  submitForm = event => {
    event.preventDefault()
    const isValid = this.validateForm()
    let submissionData = {}

    if (isValid) {
      this.setState({ submit: 'submitting' })
      const state = this.state

      if (state.attending === 'yes') {
        submissionData = {
          attending: 'YES',
          nameOne: state.nameOne,
          mealOne: state.mealOne,
          email: state.email,
          bookedHotel: state.bookedHotel,
          additional: state.comments,
          comments: state.comments.trim() || `${state.nameOne} has RSVP'd!`
        }

        if (state.secondGuest) {
          submissionData.nameTwo = state.nameTwo
          submissionData.mealTwo = state.mealTwo
        }
      } else {
        submissionData = {
          attending: 'NOT ATTENDING',
          nameOne: state.nameOne,
          email: state.email,
          comments: state.comments.trim()
        }
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'rsvp', ...submissionData })
      })
        .then(() => {
          if (state.attending === 'yes') {
            Cookies.set('rsvp', 'attending', { expires: 30 })
          } else {
            Cookies.set('rsvp', 'not-attending', { expires: 30 })
          }
          this.setState({ submit: 'complete' })
          scroller.scrollTo('rsvp', { offset: -60, smooth: true, duration: 500 })
        })
        .catch(() => {
          this.setState({ submit: 'error' })
        })
    }
  }

  renderErrors = () => {
    const errors = filter(this.state.errors, error => !!error)
    if (!errors.length) return null

    return (
      <ErrorsLayout>
        <ErrorIcon />
        <ErrorsList>
          {map(errors, error => (
            <ErrorMessage key={uniqueId()}>{error}</ErrorMessage>
          ))}
        </ErrorsList>
      </ErrorsLayout>
    )
  }

  renderContents = () => {
    const {
      attending,
      nameOne,
      mealOne,
      nameTwo,
      mealTwo,
      email,
      bookedHotel,
      secondGuest,
      comments,
      errors,
      submit
    } = this.state

    if (submit === 'complete') {
      return <SubmissionComplete />
    } else if (submit === 'error') {
      return <SubmitError />
    }
    return (
      <Form
        name="rsvp"
        onSubmit={this.submitForm}
        data-netlify="true"
        submitting={submit === 'submitting'}
      >
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="nameTwo" />
        <input type="hidden" name="mealTwo" />
        <input type="hidden" name="comments" />
        <Attendance value={attending} onChange={this.onAttendingChanged} />
        <Divider />
        {attending === 'yes' ? (
          <Fragment>
            <Guest
              id="One"
              meal={mealOne}
              onMealChanged={event => this.onMealChanged('One', event)}
              name={nameOne}
              onNameChanged={event => this.onNameChanged('One', event)}
              nameError={!!errors.nameOne}
              mealError={!!errors.mealOne}
            />
            {secondGuest ? (
              <Guest
                id="Two"
                meal={mealTwo}
                onMealChanged={event => this.onMealChanged('Two', event)}
                name={nameTwo}
                onNameChanged={event => this.onNameChanged('Two', event)}
                removable
                onRemove={() => this.setSecondGuest(false)}
                nameError={!!errors.nameTwo}
                mealError={!!errors.mealTwo}
              />
            ) : (
              <AddGuest onClick={() => this.setSecondGuest(true)} />
            )}
            <Divider />
            <Additional
              email={email}
              onEmailChanged={this.onEmailChanged}
              booked={bookedHotel}
              onBookedChanged={this.onHotelBookedChanged}
              comments={comments}
              onCommentsChanged={this.onCommentsChanged}
              emailError={!!errors.email}
              bookedError={!!errors.bookedHotel}
            />
          </Fragment>
        ) : (
          <Decline
            name={nameOne}
            onNameChanged={event => this.onNameChanged('One', event)}
            nameError={!!errors.nameOne}
            email={email}
            emailError={!!errors.email}
            onEmailChanged={this.onEmailChanged}
            comments={comments}
            onCommentsChanged={this.onCommentsChanged}
          />
        )}
        {this.renderErrors()}
        <SubmitButton type="submit" disabled={submit === 'submitting'}>
          Send RSVP
        </SubmitButton>
      </Form>
    )
  }

  render() {
    return (
      <Section title="RSVP" name="rsvp" css={sectionStyles}>
        <Layout>
          <Card>{this.renderContents()}</Card>
          <Card>
            <Registry />
          </Card>
        </Layout>
      </Section>
    )
  }
}

export default rsvp

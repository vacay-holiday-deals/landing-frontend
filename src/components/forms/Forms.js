import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form, { Row } from 'react-bootstrap/Form'
import Country from 'country-telephone-data'
import Loader from 'react-loader-spinner'
import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { TrackEvent } from '../tracking/facebookTracking'
import { Event } from '../tracking/googleTracking'

function OfferForm({ title }) {
  const URL_PROXY = process.env.REACT_APP_PROXY_URL
  const PORT_NUM = process.env.REACT_APP_PORT_NUM

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nationality, setNationality] = useState('Kenya')
  const [number, setNumber] = useState('')
  const [departure, setDeparture] = useState(
    String(
      format(new Date(Date.now()).toLocaleDateString('en-us'), 'YYYY-MM-DD')
    )
  )
  const [adult, setAdult] = useState(0)
  const [children, setChildren] = useState(0)
  const [budget, setBudget] = useState('4 Star')
  const [info, setInfo] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const errorMessage = value => {
    setErrorMsg(value)
    setTimeout(() => {
      setErrorMsg('')
    }, 5000)
  }

  let msge

  const validate = () => {
    if (!name && !email && !number) {
      msge = 'Fields are required'
      errorMessage(msge)
      return false
    } else if (!name) {
      msge = 'Name is required'
      errorMessage(msge)
      return false
    } else if (!email) {
      msge = 'Email is required'
      errorMessage(msge)
      return false
    } else if (!email.includes('@')) {
      msge = 'Valid email required'
      errorMessage(msge)
      return false
    } else if (!number) {
      msge = 'Number is required'
      errorMessage(msge)
      return false
    } else {
      return true
    }
  }

  const handleSubmit = e => {
    // adding google analytics and facebook pixel analytics
    // google
    Event('SUBMIT', 'Submiting details', 'SUBMIT_FORM_DETAILS')
    TrackEvent('SUBMIT', 'SUBMITING_FORM_DETAILSs')

    e.preventDefault()
    const isValidated = validate()
    if (!isValidated) {
      return false
    }

    setIsSending(true)

    setTimeout(() => {
      setIsSending(false)
    }, 2000)

    const details = {
      Package: title,
      Name: name,
      Email: email,
      Nationality: nationality,
      Number: number,
      Departure: departure,
      Adults: adult,
      Children: children,
      Budget: budget,
      Info: info
    }

    console.log(details)

    fetch(`${URL_PROXY}:${PORT_NUM}/api/uploadDetail`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details),
      mode: 'cors'
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        setSuccessMsg(res.Message)
      })
      .catch(error => {
        return error
      })

    setName('')
    setEmail('')
    setAdult('')
    setBudget('4 star')
    setDeparture('')
    setChildren('')
    setNationality('Kenya')
    setInfo('')
    setNumber('')
  }

  return (
    <Container className='Form--container'>
      <p
        style={{
          color: 'white',
          fontSize: '1.2rem',
          background: '#e73846'
        }}>
        {errorMsg}
      </p>

      <h4>Get in touch</h4>
      <Form action='' method='post'>
        <Form.Group className='form--group'>
          <Form.Label className='label'>Name</Form.Label>

          <Form.Control
            type='text'
            placeholder='John Doe'
            className='form--control'
            name='name'
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
            required={true}
          />
        </Form.Group>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Email</Form.Label>

          <Form.Control
            type='email'
            placeholder='jdoe@gmail.com'
            className='form--control'
            name='email'
            onChange={e => {
              setEmail(e.target.value)
            }}
            value={email}
            required={true}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>Nationality</Form.Label>
              <Form.Control
                as='select'
                className='form--control'
                name='nationality'
                onChange={e => {
                  setNationality(e.target.value)
                }}
                value={nationality}
                required={true}>
                <option value='Kenya'>Kenya</option>
                {Country.allCountries.map((name, key) => (
                  <option key={name.iso2}>{name.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>
                Number (with country code)
              </Form.Label>

              <Form.Control
                placeholder='+254'
                type='number'
                className='form--control'
                onChange={e => {
                  setNumber(e.target.value)
                }}
                value={number}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Departure</Form.Label>

          <Form.Control
            type='date'
            placeholder='departure'
            className='form--control'
            onChange={e => {
              setDeparture(e.target.value)
            }}
            value={departure}
            required
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>
                Adults (12 years and above)
              </Form.Label>

              <Form.Control
                type='Number'
                placeholder='adults'
                className='form--control'
                onChange={e => {
                  setAdult(e.target.value)
                }}
                value={adult}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>
                Children (12 years under)
              </Form.Label>

              <Form.Control
                type='Number'
                placeholder='children'
                className='form--control'
                onChange={e => {
                  setChildren(e.target.value)
                }}
                value={children}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Hotel Budget</Form.Label>

          <Form.Control
            as='select'
            className='form--control select'
            onChange={e => {
              setBudget(e.target.value)
            }}
            required
            value={budget}>
            <option defaultValue>4 star</option>
            <option>3 star</option>
            <option>5 star</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Additional details</Form.Label>

          <Form.Control
            as='textarea'
            placeholder='other details'
            size='lg'
            className='textarea'
            onChange={e => {
              setInfo(e.target.value)
            }}
            value={info}
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          size='lg'
          block
          onClick={handleSubmit}
          className='form--btn'>
          {isSending && (
            <div className='loading'>
              <Loader type='ThreeDots' color='#fff' height={30} width={30} />
              <span className='ml-3'> sending</span>
            </div>
          )}

          {!isSending && <span>Send</span>}
        </Button>
        <p
          style={{ color: 'white', fontSize: '1.2rem', background: 'green' }}
          className='mt-2'>
          {successMsg}
        </p>
      </Form>
    </Container>
  )
}

OfferForm.propTypes = {
  errorMessage: PropTypes.func,
  validate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

OfferForm.defaultProps = {
  errorMessage: () => {},
  validate: () => {},
  handleSubmit: () => {}
}
export default OfferForm

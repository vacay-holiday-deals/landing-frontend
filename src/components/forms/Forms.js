import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Country from 'country-telephone-data'
import Loader from 'react-loader-spinner'
import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { TrackEvent } from '../tracking/facebookTracking'
import { Event } from '../tracking/googleTracking'
import { useAlert } from 'react-alert'
import axios from 'axios'
import history from '../../routes/AppHistory'
import uuid from 'uuid'

function OfferForm({ title, destination }) {
  const URL_PROXY = process.env.REACT_APP_PROXY_URL
  const PORT_NUM = process.env.REACT_APP_PORT_NUM

  const alert = useAlert()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nationality, setNationality] = useState('Kenya')
  const [number, setNumber] = useState('')
  const [destinations, setDestinations] = useState(destination[0])
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

  let msge

  const validate = () => {
    if (!name && !email && !number) {
      msge = 'All fields are required'
      alert.error(msge)
      return false
    } else if (!name) {
      msge = 'Name is required'
      alert.error(msge)
      return false
    } else if (!email) {
      msge = 'Email is required'
      alert.error(msge)
      return false
    } else if (!email.includes('@')) {
      msge = 'Email is invalid'
      alert.error(msge)
      return false
    } else if (!number) {
      msge = 'Number is required'
      alert.error(msge)
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // adding google analytics and facebook pixel analytics
    // google
    Event('SUBMIT', 'Submiting details', 'SUBMIT_FORM_DETAILS')
    TrackEvent('SUBMIT', 'SUBMITING_FORM_DETAILSs')

    const isValidated = validate()
    if (!isValidated) {
      return false
    }

    setIsSending(true)

    setTimeout(() => {
      setIsSending(false)
    }, 4500)

    const details = {
      Package: title,
      Name: name,
      Email: email,
      Nationality: nationality,
      Number: number,
      Departure: departure,
      Destination: destinations,
      Adults: adult,
      Children: children,
      Budget: budget,
      Info: info
    }

    axios
      .post(`${URL_PROXY}:${PORT_NUM}/api/uploadDetail`, details, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        history.push('/confirmation')
      })
      .catch(error => {
        console.log(error)
      })

    setName('')
    setEmail('')
    setAdult(0)
    setBudget('4 star')
    setDestinations(destination[0])
    setDeparture(
      String(
        format(new Date(Date.now()).toLocaleDateString('en-us'), 'YYYY-MM-DD')
      )
    )
    setChildren(0)
    setNationality('Kenya')
    setInfo('')
    setNumber('')
  }

  return (
    <div className='form--container'>
      <form action='' method='post'>
        <h4>Get in touch</h4>
        <br />
        <div className='form--group'>
          <label className='label'>name</label>
          <input
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
        </div>

        <div className='form--group'>
          <label className='label'>email</label>
          <input
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
        </div>

        <div className='joint'>
          <div className='form--group'>
            <label className='label'>nationality</label>
            <select
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
            </select>
          </div>

          <div className='form--group'>
            <label className='label'>phone</label>
            <input
              placeholder='0700243433'
              type='number'
              className='form--control'
              onChange={e => {
                setNumber(e.target.value)
              }}
              value={number}
              required
            />
          </div>
        </div>
        <div className='joint'>
          <div className='form--group'>
            <label className='label'>departure</label>
            <input
              type='date'
              placeholder='departure'
              className='form--control'
              onChange={e => {
                setDeparture(e.target.value)
              }}
              value={departure}
              required
            />
          </div>

          <div className='form--group'>
            <label className='label'>destination</label>
            <select
              className='form--control'
              name='destinations'
              onChange={e => {
                setDestinations(e.target.value)
              }}
              value={destinations}
              required={true}>
              <option value={destination[0]}>{destination[0]}</option>
              {destination.map(location => (
                <option key={uuid.v4()}>{location}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='joint'>
          <div className='form--group'>
            <label className='label'>adults : 12yrs +</label>
            <input
              type='Number'
              placeholder='adults'
              className='form--control'
              aria-describedby='inputGroupPrepend'
              onChange={e => {
                setAdult(e.target.value)
              }}
              value={adult}
              required
            />
          </div>
          <div className='form--group'>
            <label className='label'>children : 12yrs under</label>

            <input
              type='Number'
              placeholder='children'
              className='form--control'
              onChange={e => {
                setChildren(e.target.value)
              }}
              value={children}
              required
            />
          </div>
        </div>

        <div className='form--group'>
          <label className='label'>hotel budget</label>

          <select
            className='form--control select'
            onChange={e => {
              setBudget({ value: e.target.value })
            }}
            required
            value={budget}>
            <option defaultValue>4 star</option>
            <option>3 star</option>
            <option>5 star</option>
          </select>
        </div>

        <div className='form--group'>
          <label className='label'>additional details</label>
          <textarea
            placeholder='other details'
            className='textarea'
            onChange={e => {
              setInfo(e.target.value)
            }}
            value={info}></textarea>
        </div>
      </form>

      <Button
        variant='primary'
        type='submit'
        size='lg'
        block
        onClick={handleSubmit}
        className='btn form--btn'>
        {isSending ? (
          <div className='loading'>
            <Loader type='ThreeDots' color='#fff' height={45} width={45} />
          </div>
        ) : (
          <span>SEND</span>
        )}
      </Button>
    </div>
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

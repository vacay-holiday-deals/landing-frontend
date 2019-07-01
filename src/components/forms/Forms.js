import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form, { Row } from 'react-bootstrap/Form'
import Country from 'country-telephone-data'
import axios from 'axios'

function OfferForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nationality, setNationality] = useState('')
  const [number, setNumber] = useState('')
  const [departure, setDeparture] = useState('')
  const [adult, setAdult] = useState('')
  const [children, setChildren] = useState('')
  const [budget, setBudget] = useState('')
  const [info, setInfo] = useState('')

  const handleNameChange = e => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleEmailChange = e => {
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handleNationalityChange = e => {
    e.preventDefault()
    setNationality(e.target.value)
  }
  const handleNumberChange = e => {
    e.preventDefault()
    setNumber(e.target.value)
  }
  const handleDepartureChange = e => {
    e.preventDefault()
    setDeparture(e.target.value)
  }
  const handleAdultChange = e => {
    e.preventDefault()
    setAdult(e.target.value)
  }
  const handleChildrenChange = e => {
    e.preventDefault()
    setChildren(e.target.value)
  }
  const handleBudgetChange = e => {
    e.preventDefault()
    setBudget(e.target.value)
  }
  const handleInfoChange = e => {
    e.preventDefault()
    setInfo(e.target.value)
  }

  const [offer, setOffers] = useState([])

  useEffect(() => {
    axios
      .get('https://vacayapi.herokuapp.com/api/getOffer')
      .then(res => {
        // setOffer to the last offer in the array
        const offers = res.data.slice(-1)[0]
        setOffers(offers)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const { title } = offer

  const handleSubmit = e => {
    e.preventDefault()
    const details = {
      Package: title,
      Name: name,
      Email: email,
      Nationality: nationality,
      Number: number,
      Departure: departure,
      Adults: adult,
      Children: children,
      Info: info
    }

    window.location.href = `mailto:info@vacay.co.ke?subject=${title}&body= Package : ${
      details.Package
    }  Name : ${details.Name} Email : ${details.Email} Nationality : ${
      details.Email
    } Number : ${details.Number} date of departure : ${
      details.Departure
    } number of adults : ${details.Adults} number of children : ${
      details.Children
    } Any other information : ${details.Info}&cc=mymbugua@gmail.com`

    axios
      .post('http://localhost:5000/api/uploadDetail', details, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const originCountry = Country.allCountries[115].name

  return (
    <Container className='Form--container'>
      <h5>Send us your details</h5>
      <Form action='' method='get' onSubmit={handleSubmit}>
        <Form.Group className='form--group'>
          <Form.Label className='label'>Name</Form.Label>

          <Form.Control
            type='text'
            placeholder='name'
            className='form--control'
            name='name'
            onChange={handleNameChange}
            value={name}
          />
        </Form.Group>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Email</Form.Label>

          <Form.Control
            type='email'
            placeholder='email'
            className='form--control'
            name='email'
            onChange={handleEmailChange}
            value={email}
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
                onChange={handleNationalityChange}
                value={nationality}>
                <option>{originCountry}</option>
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
                onChange={handleNumberChange}
                value={number}
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
            onChange={handleDepartureChange}
            value={departure}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>Adults</Form.Label>

              <Form.Control
                type='Number'
                placeholder='adults'
                className='form--control'
                onChange={handleAdultChange}
                value={adult}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>Children</Form.Label>

              <Form.Control
                type='Number'
                placeholder='children'
                className='form--control'
                onChange={handleChildrenChange}
                value={children}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Hotel Budget</Form.Label>

          <Form.Control
            as='select'
            className='form--control select'
            onChange={handleBudgetChange}
            value={budget}>
            <option className='choose'>3 star</option>
            <option>4 star</option>
            <option>5 star</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Other details (optional)</Form.Label>

          <Form.Control
            as='textarea'
            placeholder='other details'
            size='lg'
            className='textarea'
            onChange={handleInfoChange}
            value={info}
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          size='lg'
          block
          className='form--btn'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default OfferForm

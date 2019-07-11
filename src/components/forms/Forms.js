import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form, { Row } from 'react-bootstrap/Form'
import Country from 'country-telephone-data'


function OfferForm(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nationality, setNationality] = useState('')
  const [number, setNumber] = useState('')
  const [departure, setDeparture] = useState('')
  const [adult, setAdult] = useState('')
  const [children, setChildren] = useState('')
  const [budget, setBudget] = useState('')
  const [info, setInfo] = useState('')

  const { title } = props

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
      Budget: budget,
      Info: info
    }

    fetch('http://localhost:5000/uploadDetail', {
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
      .then(res => console.log(res))
      .catch(error => {
        return error
      })

    setName('')
    setEmail('')
    setAdult('')
    setBudget('')
    setDeparture('')
    setChildren('')
    setNationality('Kenya')
    setInfo('')
    setNumber('')
  }

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
            onChange={e => {
              setName(e.target.value)
            }}
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
            onChange={e => setEmail(e.target.value)}
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
                onChange={e => {
                  setNationality(e.target.value)
                }}
                value={nationality}>
                <option>Kenya</option>
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
                onChange={e => {
                  setAdult(e.target.value)
                }}
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
                onChange={e => {
                  setChildren(e.target.value)
                }}
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
            onChange={e => {
              setBudget(e.target.value)
            }}
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
          className='form--btn'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default OfferForm

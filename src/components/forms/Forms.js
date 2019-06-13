import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form, { Row } from 'react-bootstrap/Form'
import Country from 'country-telephone-data'

function OfferForm() {

  return (
    <Container className='Form--container'>
      <h5>Send us your details</h5>
      <Form onSubmit='MAILTO:info@vacay.co.ke'>
        <Form.Group className='form--group'>
          <Form.Label className='label'>Name</Form.Label>

          <Form.Control
            type='text'
            placeholder='name'
            className='form--control'
          />
        </Form.Group>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Email</Form.Label>

          <Form.Control
            type='email'
            placeholder='email'
            className='form--control'
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='form--group'>
              <Form.Label className='label'>Country</Form.Label>
              <Form.Control as='select' className='form--control'>
                <option>choose...</option>
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
                type='text'
                className='form--control'
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
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='form--group'>
          <Form.Label className='label'>Hotel Budget</Form.Label>

          <Form.Control as='select' className='form--control select'>
            <option>choose...</option>
            <option>3 star</option>
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

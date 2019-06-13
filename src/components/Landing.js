import React from 'react'
import Carousel from './Carousel'
import Sharebar from './Share'
import Form from './forms/Forms'
import Tabs from './tabs/Tabs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Landing() {
  return (
    <div className='landing'>
      <div className='landing--container'>
        <section className='landing--carousel'>
          <div className='carousel--container'>
            <Carousel />
          </div>
        </section>
        <section className='landing--info'>
          <Container fluid={true} className='landing--info-container'>
            <Row>
              <Col xs={6} md={6} sm className='landing--info-tabs'>
                <Tabs>
                  <div label='Overview'>Overview</div>
                  <div label='Itinerary'>Itinerary</div>
                  <div label='Inclusions & Exclusions'>
                    Inclusions & Exclusions
                  </div>
                  <div label='Price'>Price</div>
                </Tabs>
                <div className='more--info'>
                  <h4>Additional Information</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti numquam quas provident quae deleniti nesciunt
                    debitis asperiores totam voluptatem amet.
                  </p>
                </div>
              </Col>
              <Col xs={6} md={6} sm className='landing--info-form'>
                <Sharebar />
                <Form />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='landing--blank' />
      </div>
    </div>
  )
}

export default Landing

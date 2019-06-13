import React from 'react'
import Carousel from './Carousel'
import Sharebar from './Share'
import Form from './forms/Forms'
import Tabs from './tabs/Tabs'
import Container from 'react-bootstrap/Container'

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
            
              <div className='landing--info-tabs'>
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
              </div>
              <div className='landing--info-form'>
                <Sharebar />
                <Form />
              </div>
           
          </Container>
        </section>
        <section className='landing--blank' />
      </div>
    </div>
  )
}

export default Landing

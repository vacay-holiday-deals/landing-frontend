import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import Sharebar from './Share'
import Form from './forms/Forms'
import Tabs from './tabs/Tabs'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import jsonxml from 'jsontoxml'

function Landing() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios
      .get('https://vacayapi.herokuapp.com/api/getOffer')
      //.get('http://localhost:5000/api/getOffer')
      .then(res => {
        // setOffer to the last offer in the array
        const xml = jsonxml(res.data)
        console.log(xml)
        const offers = res.data.slice(-1)[0]
        setOffer(offers)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const { title, overview, itinerary, inclusion, price, addinfo } = offer

  return (
    <div className='landing'>
      <div className='landing--container'>
        <section className='landing--carousel'>
          <div className='carousel--container'>
            <div className='carousel--heading'>
              <h4 className='title'>{title}</h4>
            </div>
            <Carousel />
          </div>
        </section>
        <section className='landing--info'>
          <Container fluid={true} className='landing--info-container'>
            <div className='landing--info-tabs'>
              <Tabs>
                <div label='Overview'>{overview}</div>
                <div label='Itinerary'>{itinerary}</div>
                <div label='Inclusions & Exclusions'>{inclusion}</div>
                <div label='Price'>{price}</div>
              </Tabs>
              <div className='more--info'>
                <h4>Additional Information</h4>
                {addinfo}
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

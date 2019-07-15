import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import Sharebar from './Share'
import Form from './forms/Forms'
import Tabs from './tabs/Tabs'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import parser from 'html-react-parser'

function Landing() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios
      .get('http://vacayapi.herokuapp.com/api/getoffer')
      .then(res => {
        // setOffer to the last offer in the array
        const offers = res.data.slice(-1)[0]
        setOffer(offers)
        return { response: res.data }
      })
      .catch(error => {
        return { Message: error }
      })
  }, [])

  const { title, overview, itinerary, inclusion, price, addinfo } = offer

  const changeToString = value => {
    const val = String(value)
      .split('"')
      .join('')

    return parser(val)
  }

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
                <div label='Overview'>{changeToString(overview)}</div>
                <div label='Itinerary'>{changeToString(itinerary)}</div>
                <div label='Inclusions & Exclusions'>
                  {changeToString(inclusion)}
                </div>
                <div label='Price'>{changeToString(price)}</div>
              </Tabs>
              <div className='more--info'>
                <h5>Additional Information</h5>
                {changeToString(addinfo)}
              </div>
            </div>
            <div className='landing--info-form'>
              <Sharebar props={title} />
              <Form title={title} />
            </div>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default Landing

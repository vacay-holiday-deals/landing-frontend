import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import Sharebar from './Share'
import Form from './forms/Forms'
import Tabs from './tabs/Tabs'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import parser from 'html-react-parser'
import Call from './Call'
import Footer from './Footer'
import Header from './Header'
import Loader from 'react-loader-spinner'

function Landing(props) {
  const [offer, setOffer] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let isMounted = false
    const { title } = props.match.params
    axios
      .get(`http://209.97.159.239:5000/api/getoffer/${title}`)
      .then(res => {
        // setOffer to the last offer in the array
        setTimeout(() => {
          setLoaded(true)
        }, 500)

        const offers = res.data
        setOffer(offers)
        return { response: res.data }
      })
      .catch(error => {
        setLoaded(true)
        return { Message: error }
      })
    return () => {
      isMounted = true
    }
  }, [props.match.params, setLoaded])

  const {
    title,
    overview,
    itinerary,
    inclusion,
    price,
    addinfo,
    images
  } = offer

  // function to change value to string and parse it as html value
  const changeToString = value => {
    const val = String(value)
      .split('"')
      .join('')

    return parser(val)
  }

  return (
    <div className='App'>
      {!loaded ? (
        <div className='loader'>
          <Loader type='Bars' color='#0068b3' height={150} width={150} />
        </div>
      ) : (
        <div className='App'>
          <Call />
          <Header />
          <div className='landing'>
            <div className='landing--container'>
              <section className='landing--carousel'>
                <div className='carousel--container'>
                  <Carousel images={images} />
                </div>
              </section>
              <section className='landing--info'>
                <Container fluid={true} className='landing--info-container'>
                  <div className='landing--info-tabs'>
                    <h4 className='info--title'>{title}</h4>
                    <Tabs>
                      <div label='Overview'>{changeToString(overview)}</div>
                      <div label='Itinerary'>{changeToString(itinerary)}</div>
                      <div label='Inclusions & Exclusions'>
                        {changeToString(inclusion)}
                      </div>
                      <div label='Price'>{changeToString(price)}</div>
                    </Tabs>
                    <div className='more--info'>
                      {addinfo === '' ? (
                        <p />
                      ) : (
                        <div>
                          <h5>Additional Information</h5>
                          {changeToString(addinfo)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='landing--info-form'>
                    <Sharebar title={title} image={images} />
                    <Form title={title} />
                  </div>
                </Container>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Landing

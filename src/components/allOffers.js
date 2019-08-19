import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { format } from 'date-fns'
import PropTypes from 'prop-types'

require('dotenv').config()

function AllOffers() {
  const URL_PROXY = process.env.REACT_APP_PROXY_URL
  const PORT_NUM = process.env.REACT_APP_PORT_NUM

  const [offers, setOffers] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    axios
      .get(`${URL_PROXY}:${PORT_NUM}/api/getoffer`)
      .then(res => {
        setTimeout(() => {
          setLoaded(true)
        }, 200)
        setOffers(res.data)
      })
      .catch(error => {
        console.log(error)
        setLoaded(true)
      })
    // eslint-disable-next-line
  }, [])
  const height = '100%'
  const width = '100%'

  return (
    <Fragment>
      <div className='container-fluid landing--container'>
        <div className='landing--img'>
          <LazyLoadImage
            src='images/images/beach.jpg'
            alt='vacay'
            effect='blur'
            className='image'
            height={height}
            width={width}
          />
        </div>

        <div className='page--content'>
          <h4>
            All offers :{' '}
            {!isLoaded ? <span>0</span> : <span>{offers.length}</span>}
          </h4>
          <div className='content--container'>
            {!isLoaded ? (
              <div className='loader'>
                <Loader type='Bars' color='#0068b3' height={70} width={80} />
              </div>
            ) : offers.length !== 0 ? (
              offers.map(offer => {
                const { id, title, created } = offer
                return (
                  <div className='card' key={id}>
                    <h6 className='ml-10'>
                      <Link to={`/${title}`}>{title}</Link>
                    </h6>
                    <p className='ml-10'>{format(created, 'MMMM DD, YYYY')}</p>
                  </div>
                )
              })
            ) : (
              <div className='loader'>
                <span>
                  <span className='ml-15' style={{ textAlign: 'center' }}>
                    &#9785;
                  </span>
                  <br />
                  <strong>No offers available</strong>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

AllOffers.propTypes={
  offers: PropTypes.array
}

AllOffers.defaultProps ={
  offers:[]
}

export default AllOffers

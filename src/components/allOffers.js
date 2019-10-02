import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { TrackEvent } from './tracking/facebookTracking'
import { Event } from './tracking/googleTracking'
import { useStoreActions, useStoreState } from 'easy-peasy'
require('dotenv').config()

function AllOffers() {
  const [isLoaded, setLoaded] = useState(false)
  const [value, setValue] = useState('')

  const offers = useStoreState(state => state.offers)
  const fetchOffers = useStoreActions(actions => actions.getOffers)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
    fetchOffers()
    // eslint-disable-next-line
  }, [])

  let filteredOffers = offers.filter(offer => {
    return offer.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
  })

  return (
    <Fragment>
      <div className='container-fluid landing--container'>
        <div className='landing--img'>
          <img
            src='https://res.cloudinary.com/lostvane/image/upload/v1568975845/testing_unsigned_upload/vhl3qtqftv0cwq2poolq.jpg'
            alt='vacay'
            effect='blur'
            className='image'
          />
        </div>

        <div className='search mt-2 mb-2'>
          <input
            type='text'
            placeholder='start typing ...'
            className='search--input'
            value={value}
            onChange={e => {
              setValue(e.target.value)
            }}
          />
        </div>

        <div className='page--content mt-2'>
          <h4>
            All offers :{' '}
            {!isLoaded ? <span>0</span> : <span>{filteredOffers.length}</span>}
          </h4>
          <div className='content--container'>
            {!isLoaded ? (
              <div className='loader'>
                <Loader
                  type='ThreeDots'
                  color='#0068b3'
                  height={80}
                  width={80}
                />
              </div>
            ) : filteredOffers.length !== 0 ? (
              filteredOffers.map(offer => {
                const { id, title, created, images } = offer
                return (
                  <div className='card' key={id}>
                    <div
                      style={{
                        height: '20vh',
                        width: '100%',
                        objectFit: 'contain'
                      }}>
                      <img
                        src={images[0]}
                        alt=''
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '3px'
                        }}
                      />
                    </div>
                    <h6 className='mt-3'>
                      <Link
                        to={`/${title}`}
                        onClick={() => {
                          Event(
                            'CLICKED ON OFFER',
                            'Clicked on offer link',
                            title
                          )
                          TrackEvent('Clicked on offer Link', title)
                        }}>
                        <span
                          style={{
                            color: '#000411',
                            fontWeight: '600',
                            marginTop: '5px'
                          }}>
                          {title}
                        </span>
                      </Link>
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

AllOffers.propTypes = {
  offers: PropTypes.array
}

AllOffers.defaultProps = {
  offers: []
}

export default AllOffers

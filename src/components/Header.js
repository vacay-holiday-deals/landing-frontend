import React from 'react'
import { Link } from 'react-router-dom'
import { Event } from './tracking/googleTracking'
import { TrackEvent } from './tracking/facebookTracking'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='header--logo'>
          <img alt='logo' src='images/logo.png' />
        </div>
      </Link>
      <div className='header--button'>
        <a
          href='https://vacay.co.ke/destinations-in-africa/'
          className='btn stylebutton'
          rel='noopener noreferrer'
          onClick={() => {
            TrackEvent('Clicked on more offers Link', 'More offers link')
            Event(
              'MORE OFFERS LINK',
              'Clicked on more offers link',
              'MORE_OFFERS_LINK'
            )
          }}
          target='_blank'>
          More offers
        </a>
      </div>
    </div>
  )
}

export default Header

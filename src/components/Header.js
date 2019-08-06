import React from 'react'
import { Link } from 'react-router-dom'

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
          href='https://vacay.co.ke/'
          className='btn stylebutton'
          rel='noopener noreferrer'
          target='_blank'>
          More offers
        </a>
      </div>
    </div>
  )
}

export default Header

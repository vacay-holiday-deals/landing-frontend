import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Call() {
  return (
    <div className='top-bar'>
      <div className='top-bar--contact'>
        <a
          href='tel:+254716875656'
          className='top-bar--contact-info'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faPhone} className='icon' />
          <span className='contact-links'>Call us at : +254716 875656</span>
        </a>
        <a
          href='MAILTO:info@vacay.co.ke'
          className='top-bar--contact-info'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          <span className='contact-links'>Email us at : info@vacay.co.ke </span>
        </a>
      </div>
      <div className='top-bar--social'>
        <a
          href='https://www.instagram.com/vacayholidaydeals/?hl=en'
          className='top-bar--social-links'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className='icon' />
        </a>

        <a
          href='https://www.facebook.com/vacaydeals/'
          className='top-bar--social-links'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faFacebook} className='icon' />
        </a>

        <a
          href='https://twitter.com/Vacay_Deals'
          className='top-bar--social-links'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faTwitter} className='icon' />
        </a>
        <a
          href='https://wa.me/254716875656'
          className='top-bar--social-links'
          rel='noopener noreferrer'
          target='_blank'>
          <FontAwesomeIcon icon={faWhatsapp} className='icon' />
        </a>
      </div>
    </div>
  )
}

export default Call

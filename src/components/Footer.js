import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer--container'>
        <div className='footer--contact cards'>
          <h3 className='footer--header'>Contact</h3>
          <div className='items'>
            <a
              href='https://goo.gl/maps/nTDfSdaBrpSho1nn7'
              className='link--items'>
              Tsavo Road, South B
            </a>
            <a href='tel:254716875656' className='link--items'>
              +254 716 875656
            </a>
            <a href='MAILTO:info@vacay.co.ke' className='link--items'>
              info@vacay.co.ke
            </a>
          </div>
        </div>
        <div className='footer--resources cards'>
          <h3 className='footer--header'>Resources</h3>
          <div className='items'>
            <a href='links' className='link--items'>
              Trip Now Pay Later
            </a>
            <a href='links' className='link--items'>
              Reviews
            </a>
            <a href='links' className='link--items'>
              Blog
            </a>
            <a href='links' className='link--items'>
              Privacy and Policy
            </a>
          </div>
        </div>
        <div className='footer--links cards'>
          <h3 className='footer--header'>Links</h3>
          <div className='items'>
            <a href='links' className='link--items'>
              Home
            </a>
            <a href='links' className='link--items'>
              Destinations
            </a>
            <a href='links' className='link--items'>
              Packages
            </a>
            <a href='links' className='link--items'>
              Flights
            </a>
          </div>
        </div>
        <div className='footer--social cards'>
          <h3 className='footer--header'>Social</h3>
          <div className='items'>
            <a
              href='https://www.instagram.com/vacayholidaydeals/?hl=en'
              className='link--items'>
              <FontAwesomeIcon icon={faInstagram} className='icon' />
              <span>instagram</span>
            </a>
            <a
              href='https://www.facebook.com/vacaydeals/'
              className='link--items'>
              <FontAwesomeIcon icon={faFacebook} className='icon' />
              <span>facebook</span>
            </a>
            <a href='https://twitter.com/Vacay_Deals' className='link--items'>
              <FontAwesomeIcon icon={faTwitter} className='icon' />
              <span>twitter</span>
            </a>
            <a href='https://wa.me/254716875656' className='link--items'>
              <FontAwesomeIcon icon={faWhatsapp} className='icon' />
              <span>whatsapp</span>
            </a>
          </div>
        </div>
      </div>

      <div className='footer--copyright'>
        <hr className='hr' />
        <p className='link'>&copy; vacay.co.ke 2019 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

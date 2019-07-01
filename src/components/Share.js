import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share() {
  const url = window.location.href
  const [counterFacebook, setCounterFacebook] = useState(0)
  const [counterInstagram, setCounterInstagram] = useState(0)
  const [counterWhatsapp, setCounterWhatsapp] = useState(0)
  const [counterTwitter, setCounterTwitter] = useState(0)

  const handleClickInstagram = () => {
    setCounterInstagram(counterInstagram + 1)
  }
  const handleClickFacebook = () => {
    setCounterFacebook(counterFacebook + 1)
  }
  const handleClickTwitter = () => {
    setCounterTwitter(counterTwitter + 1)
  }
  const handleClickWhatsapp = () => {
    setCounterWhatsapp(counterWhatsapp + 1)
  }

  return (
    <div className='share'>
      <h5>Tell a friend</h5>
      <Navbar className='nav--appbar'>
        <a
          href={`http://instagram.com/sharer.php?u=${url}`}
          className='instagram'
          rel='noopener noreferrer'
          target='_blank'
          onClick={handleClickInstagram}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          instagram
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          className='facebook'
          target='_blank'
          rel='noopener noreferrer'
          onClick={handleClickFacebook}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          facebook
        </a>
        <a
          href={`http://twitter.com/share?url=${url}&hashtags=#vacayholidaydeals`}
          className='twitter'
          rel='noopener noreferrer'
          target='_blank'
          onClick={handleClickTwitter}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          twitter
        </a>
        <a
          href={`whatsapp://send?text=${url}`}
          className='whatsapp'
          rel='noopener noreferrer'
          target='_blank'
          onClick={handleClickWhatsapp}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          whatsapp
        </a>
      </Navbar>
    </div>
  )
}

export default Share

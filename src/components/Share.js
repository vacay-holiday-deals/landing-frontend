import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share() {
  const url = window.location.href
  const [counter, setCounter] = useState(0)

  const handleClickInstagram = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const handleClickFacebook = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const handleClickTwitter = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const handleClickWhatsapp = () => {
    setCounter(counter + 1)
    console.log(counter)
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

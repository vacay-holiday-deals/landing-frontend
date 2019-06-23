import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share() {
  const url = window.location.href

  console.log(url)

  return (
    <div className='share'>
      <h5>Tell a friend</h5>
      <Navbar className='nav--appbar'>
        <a href='hello' className='instagram'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          instagram
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          className='facebook'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          facebook
        </a>
        <a
          href={`http://twitter.com/share?url=${url}&hashtags=#vacayholidaydeals`}
          className='twitter'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          twitter
        </a>
        <a href={`whatsapp://send?text=${url}`} className='whatsapp'>
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

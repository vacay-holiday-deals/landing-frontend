import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share() {
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
        <a href='hello' className='facebook'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          facebook
        </a>
        <a href='hello' className='twitter'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          twitter
        </a>
        <a href='hello' className='whatsapp'>
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

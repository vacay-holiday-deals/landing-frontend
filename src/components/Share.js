import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import { TrackEvent } from '../components/tracking/facebookTracking'
import { Event } from '../components/tracking/googleTracking'

function Share({ title }) {
  const url = window.location.href

  //const newurl = url.replace(/ /, '%20')
  const newUrl = encodeURIComponent(url)

  return (
    <div className='share'>
      <h4 className='mt-3 ml-2'>Tell a friend</h4>
      <Navbar className='nav--appbar'>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${newUrl}`}
          className='facebook'
          target='_blank'
          onClick={() => {
            Event('SHARING', 'share to facebook', 'SHARED_TO_FACEBOOK')
            TrackEvent('SHARING', 'SHARED_TO_FACEBOOK')
          }}
          rel='noopener noreferrer'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          facebook
        </a>
        <a
          href={`http://twitter.com/share?url=${newUrl}`}
          className='twitter'
          rel='noopener noreferrer'
          onClick={() => {
            Event('SHARING', 'share to Twitter', 'SHARED_TO_TWITTER')
            TrackEvent('SHARING', 'SHARED_TO_TWITTER')
          }}
          target='_blank'>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          twitter
        </a>
        <a
          href={`whatsapp://send?text=${newUrl}`}
          className='whatsapp'
          rel='noopener noreferrer'
          onClick={() => {
            Event('SHARING', 'share to whatsapp', 'SHARED_TO_WHATSAPP')
            TrackEvent('SHARING', 'SHARED_TO_WHATSAPP')
          }}
          target='_blank'>
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

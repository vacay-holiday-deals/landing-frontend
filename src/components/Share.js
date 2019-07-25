import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share({ title }) {
  const url = window.location.href
  const newUrl = encodeURIComponent(url)
  const [counterFacebook, setCounterFacebook] = useState(0)
  const [counterInstagram, setCounterInstagram] = useState(0)
  const [counterWhatsapp, setCounterWhatsapp] = useState(0)
  const [counterTwitter, setCounterTwitter] = useState(0)

  return (
    <div className='share'>
      <h4 className='mt-3 ml-2'>Tell a friend</h4>
      <Navbar className='nav--appbar'>
        <a
          href={`http://instagram.com/sharer.php?u=${newUrl}%`}
          className='instagram'
          rel='noopener noreferrer'
          target='_blank'
          onMouseOver=''
          onClick={e => {
            setCounterInstagram(counterInstagram + 1)
          }}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          instagram
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${newUrl}%`}
          className='facebook'
          target='_blank'
          rel='noopener noreferrer'
          onClick={e => {
            setCounterFacebook(counterFacebook + 1)
          }}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          facebook
        </a>
        <a
          href={`http://twitter.com/share?url=${newUrl}`}
          className='twitter'
          rel='noopener noreferrer'
          target='_blank'
          onClick={e => {
            setCounterTwitter(counterTwitter + 1)
          }}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          twitter
        </a>
        <a
          href={`whatsapp://send?text=${newUrl}`}
          className='whatsapp'
          rel='noopener noreferrer'
          target='_blank'
          onClick={e => {
            setCounterWhatsapp(counterWhatsapp + 1)
          }}>
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

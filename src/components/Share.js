import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'

function Share(props) {
  const url = window.location.href
  const [counterFacebook, setCounterFacebook] = useState(0)
  const [counterInstagram, setCounterInstagram] = useState(0)
  const [counterWhatsapp, setCounterWhatsapp] = useState(0)
  const [counterTwitter, setCounterTwitter] = useState(0)

  const { title } = props

  return (
    <div className='share'>
      <h5>Tell a friend</h5>
      <Navbar className='nav--appbar'>
        <a
          href={`http://instagram.com/sharer.php?u=${url}%${title}`}
          className='instagram'
          rel='noopener noreferrer'
          target='_blank'
          onClick={e => {
            setCounterInstagram(counterInstagram + 1)
          }}>
          <span className='fontawesomeicon'>
            <FontAwesomeIcon icon={faShareAlt} className='icon' />
          </span>
          instagram
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}%${title}`}
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
          href={`http://twitter.com/share?url=${url}%${title}&hashtags=#vacayholidaydeals`}
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
          href={`whatsapp://send?text=${url}%${title}`}
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

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

function offers() {
  return (
    <div className='offers-container'>
      <div className='card offer-card'>
        <div class='content'>
          <h5 className='content--title'>title</h5>
          <p className='content--paragraph'>date</p>
        </div>
        <div class='icons'>
          <span className='delete'>
            <FontAwesomeIcon icon={faTrashAlt} className='icon icon-delete' />{' '}
            <span className='name'>delete</span>
          </span>
          <span className='edit'>
            <FontAwesomeIcon icon={faPencilAlt} className='icon icon-edit' />{' '}
            <span className='name'>edit</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default offers

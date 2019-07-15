import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not--found ml-10 MT-10'>
      <p>
        Not found page
        <Link to='/'>
          <span className='ml-3'>Go back home</span>
        </Link>
      </p>
    </div>
  )
}

export default NotFound

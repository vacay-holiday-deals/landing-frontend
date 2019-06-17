import React from 'react'
import Loader from 'react-loader-spinner'

function Load() {
  return (
    <div className='load'>
      <div className='load--loader'>
        <Loader type='Plane' color='#0068b3' height={150} width={150} />
      </div>
    </div>
  )
}

export default Load

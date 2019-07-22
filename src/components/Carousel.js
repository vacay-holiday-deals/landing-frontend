import React from 'react'
import ImageView from './ImageView'

function Slider({ images }) {
  return (
    <div className='carousel--container'>
      <ImageView images={images} />
    </div>
  )
}

export default Slider

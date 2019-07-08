import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import uuid from 'uuid'

function ImageView(props) {
  const { images } = props

  return (
    <Carousel className='carousel--main'>
      {images.map(image => {
        return (
          <Carousel.Item key={uuid()} className='carousel--main-item'>
            <img src={image} alt='imags' className='carousel--main-img' />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

ImageView.propTypes = {
  images: PropTypes.array
}
ImageView.defaultProps = {
  images: []
}

export default ImageView

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ImageView(props) {
  const { images } = props

  return (
    <Carousel className='carousel--main' interval={2000}>
      {images.map(image => {
        return (
          <Carousel.Item key={uuid.v4()} className='carousel--main-item'>
            <LazyLoadImage
              src={image}
              alt='imags'
              className='carousel--main-img'
              effect='black and white'
            />
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

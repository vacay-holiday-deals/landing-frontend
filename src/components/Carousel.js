import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const images = [
  {
    label: 'Dubai – Burj Khalifa, Dubai',
    imgPath:
      'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.pexels.com/photos/316001/pexels-photo-316001.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    label: 'hotel',
    imgPath:
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

function slider() {
  return (
    <div className='carousel--container'>
      <Carousel className='carousel--main'>
        {images.map(imag => (
          <Carousel.Item key={imag.label} className='carousel--main-item'>
            {console.log(imag.imgPath)}
            <img
              src={imag.imgPath}
              alt={imag.label}
              className='carousel--main-img'
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default slider

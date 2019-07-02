import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

function Slider() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios
      .get('https://vacayapi.herokuapp.com/api/getOffer')
      .then(res => {
        setOffer(res.data.slice(-1)[0])
      })
      .catch(err => console.log(err))
  }, [])

  const { images } = offer

  return (
    <div className='carousel--container'>
      <Carousel className='carousel--main'>
        <Carousel.Item key='' className='carousel--main-item'>
          <img src={images} alt='imags' className='carousel--main-img' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider

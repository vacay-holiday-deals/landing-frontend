import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import ImageView from './ImageView'

function Slider() {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios
      .get('https://vacayapi.herokuapp.com/api/getoffer')
      .then(res => {
        setOffer(res.data.slice(-1)[0])
      })
      .catch(err => console.log(err))
  }, [])

  console.log(offer)

  const { images } = offer
  console.log(images)

  return (
    <div className='carousel--container'>
      <ImageView images={images} />
    </div>
  )
}

export default Slider

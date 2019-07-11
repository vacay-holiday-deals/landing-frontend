import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ImageView from './ImageView'

function Slider(props) {
  const [offer, setOffer] = useState([])

  useEffect(() => {
    axios
      .get('https://vacayapi.herokuapp.com/api/getoffer')
      .then(res => {
        setOffer(res.data.slice(-1)[0])
      })
      .catch(err => console.log(err))
  }, [])

  const { images } = offer
  return (
    <div className='carousel--container'>
      <ImageView images={images} />
    </div>
  )
}

export default Slider

import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

const image = [
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

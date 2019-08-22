import React, { useEffect } from 'react'
import './App.scss'
import Call from './components/Call'
import Footer from './components/Footer'
import Header from './components/Header'
import AllOffers from './components/allOffers'
import { initGA, PageView } from './components/tracking/googleTracking'
import {
  initPixel,
  TrackPageView
} from './components/tracking/facebookTracking'
require('dotenv').config()

function App() {
  const googleTrackingId = 'UA-83869034-4'
  const pixelTrackingId = 175932129445300
  // initialise analytics tracking
  useEffect(() => {
    try {
      // google analytics tracking
      initGA(googleTrackingId)
      PageView()

      // facebook pixel tracking
      initPixel(pixelTrackingId)
      TrackPageView()
    } catch (error) {
      throw error
    }
  }, [])
  return (
    //if not loading render the div app
    <div className='App'>
      <Call />
      <Header />
      <AllOffers />
      <Footer />
    </div>
  )
}

export default App

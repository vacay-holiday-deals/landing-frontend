import React from 'react'
import './App.scss'
import Call from './components/Call'
import Footer from './components/Footer'
import Header from './components/Header'
import AllOffers from './components/allOffers'
import reactga from 'react-ga'
require('dotenv').config()

function App() {
  reactga.initialize('UA-83869034-4')
  reactga.pageview('/')
  reactga.pageview('/:title')

  // show the loader before the div app is loader
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

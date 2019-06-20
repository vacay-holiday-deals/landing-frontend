import React from 'react'
import './App.scss'
import Landing from './components/Landing'
import Call from './components/Call'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  // show the loader before the div app is loade

  return (
    //if not loading render the div app
    <div className='App'>
      <Call />
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default App

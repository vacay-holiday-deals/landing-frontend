import React, { useState, useEffect, Fragment } from 'react'
import './App.scss'
import Landing from './components/Landing'
import Call from './components/Call'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'

function App() {
  // show the loader before the div app is loaded

  // create a loading state
  const [isLoading, setIsLoading] = useState(true)

  // set isLoading to true
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <Fragment>
      {// check if is loading, set it to show the loader
      isLoading ? (
        <Loader />
      ) : (
        //if not loading render the div app
        <div className='App'>
          <Call />
          <Header />
          <Landing />
          <Footer />
        </div>
      )}
    </Fragment>
  )
}

export default App

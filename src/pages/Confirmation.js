/*
 *  @suthor Newton Mbugua
 *  On this component:
 *      - A confirmation message
 *      - A link to view more offers
 *      - Facebook pixel tracking
 *      - Google analytics tracking
 *  Future additions:
 *      - Machine learning recommender system
 */

import React, { Fragment } from 'react'
import Call from '../components/Call'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { TrackPageView } from '../components/tracking/facebookTracking'
import { PageView } from '../components/tracking/googleTracking'

function Confirmation() {
  TrackPageView()
  PageView()
  return (
    <Fragment>
      <Call></Call>
      <Header></Header>
      <div className='confirmation'>
        <div className='confirmation--wrapper'>
          <div className='confirm--header'>
            <h3>Thank you for sending an enquiry</h3>
            <hr />
          </div>
          <div className='confirm--message'>
            <p>
              Someone from reservations will revert to you as soon as possible,
              In case of any delays you may reach out on info@vacay.co.ke or
              booking@vacay.co.ke.
            </p>
          </div>
          <div className='confirm--actions'>
            <a
              href='http://vacay.co.ke'
              target='_blank'
              rel='noopener noreferrer'
              className='btn confirm--btn'>
              View more offers
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  )
}

export default Confirmation

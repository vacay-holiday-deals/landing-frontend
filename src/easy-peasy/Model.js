import { action, thunk } from 'easy-peasy'
import axios from 'axios'
require('dotenv').config()

const URL_PROXY = process.env.REACT_APP_PROXY_URL
const PORT_NUM = process.env.REACT_APP_PORT_NUM

console.log(URL_PROXY, PORT_NUM)

export default {
  offers: [],
  /*
   * Fetch all offers
   */

  // fetch the offers
  getOffers: thunk(async actions => {
    const res = await axios.get(`${URL_PROXY}:${PORT_NUM}/api/getoffer`)
    actions.setOffers(res.data)
  }),

  // alloffers actions
  setOffers: action((state, offers) => {
    state.offers = offers
  }),

  /*
   * Fetch the offers by title
   */
  offer: [],
  // fetch the offer
  getOffer: thunk(async (actions, title) => {
    const res = await axios.get(
      `${URL_PROXY}:${PORT_NUM}/api/getoffer/${title}`
    )
    actions.setOfferByTitle(res.data)
  }),

  // offer action
  setOfferByTitle: action((state, offerByTitle) => {
    state.offer = offerByTitle
  })
}

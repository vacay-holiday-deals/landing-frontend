import axios from 'axios'
const baseurl = 'http://vacayapi.herokuapp.com/api/'

const client = axios.create({
  baseurl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default client

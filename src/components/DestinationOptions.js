import React from 'react'
import uuid from 'uuid'

function DestinationOptions({ location }) {
  return <option key={uuid.v4}>{location}</option>
}

export default DestinationOptions

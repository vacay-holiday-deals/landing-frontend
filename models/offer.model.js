const mongoose = require('mongoose')
const Schema = mongoose.Schema

let offerSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  overview: { type: String, required: true, max: 3000 },
  itinerary: { type: String, required: true, max: 3000 },
  inclusions: { type: String, required: true, max: 2000 },
  price: { type: Number, required: true }
})

// Export the model
module.exports = mongoose.model('Offer', offerSchema)

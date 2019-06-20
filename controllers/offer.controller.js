const Offer = require('../models/offer.model')

// simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send('Greetings from the test controller!')
}

// create offer function
// create offer function
exports.offer_create = function(req, res) {
  let offer = new Offer({
    title: req.body.title,
    overview: req.body.overview,
    itinerary: req.body.itinerary,
    inclusions: req.body.inclusions,
    price: req.body.price
  })

  offer.save(function(err) {
    if (err) {
      return err
    }
    res.send('offer created successfully')
  })
}

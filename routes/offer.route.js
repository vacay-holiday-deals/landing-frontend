const express = require('express')
const router = express.Router()

// Require the controllers
const offer_controller = require('../controllers/offer.controller')

// a simple test url
router.get('/test', offer_controller.test)

// actual crud routes
router.post('/create', offer_controller.offer_create)

module.exports = router

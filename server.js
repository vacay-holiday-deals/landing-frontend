const express = require('express')
const http = require('http')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({ path: './env.production.local' })

//api imports
const offer = require('./routes/offer.route')

// instantiate and express app
const app = express()

// set up mongo connection


// use morgan, helmet, bodyParser for loggin security and parsing the body respectively
app.use(morgan('dev'))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.enable('trust proxy')

// use the routes
app.use('/offers', offer)

// creating a path to the build folder
app.use(express.static(path.join(__dirname, 'build')))

// setting the ports
const port = process.env.PORT || '8080'
app.set('port', port)

// creating a http server
const server = http.createServer(app)
server.listen(port, () =>
  console.log(`*** server Running on localhost:${port} ***`)
)

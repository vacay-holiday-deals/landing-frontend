const express = require('express')
const http = require('http')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// use morgan, helmet, bodyParser for loggin security and parsing the body respectively
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.enable('trust proxy')

// setting the ports
const port = process.env.PORT || '8080'
app.set('port', port)

// creating a http server
const server = http.createServer(app)
server.listen(port, () =>
  console.log(`*** server Running on localhost:${port} ***`)
)

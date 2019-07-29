const express = require('express')
const http = require('http')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

// instantiate and express app
const app = express()

// set up mongo connection

// use helmet, bodyParser for loggin security and parsing the body respectively
app.use(helmet())
app.use(express.json())
app.use(cors())

// creating a path to the build folder
app.use(express.static(path.join(__dirname, 'build')))

// setting the ports
const port = process.env.PORT || '5500'
app.set('port', port)

// creating a http server
const server = http.createServer(app)
server.listen(port, () =>
  console.log(`*** server Running on localhost:${port} ***`)
)

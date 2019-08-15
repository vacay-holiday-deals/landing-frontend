const express = require('express')
const http = require('http')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

// instantiate and express app
const app = express()

// set up mongo connection

// use helmet, bodyParser for loggin security and parsing the body respectively
app.use(helmet())
app.use(express.json())
app.use(cors())

// creating a path to the build folder
app.use(express.static(path.join(__dirname, 'build')))

let port
// setting the ports
if (process.env.NODE_ENV === 'production') {
  port = process.env.PORT
} else {
  port = '5500'
}
app.set('port', port)
console.log(process.env.PROXY)

// creating a http server
const server = http.createServer(app)
server.listen(port, () =>
  console.log(`*** server Running on localhost:${port} ***`)
)

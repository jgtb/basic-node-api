const express     = require('express')
    , bodyParser  = require('body-parser')
    , cors        = require('cors')
    , consign     = require('consign')
    , app         = express()
    , jwt         = require('jsonwebtoken')

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined
      req.user = decode
      next()
    });
  } else {
    req.user = undefined
    next()
  }
})

const dbConfig = require('./config/db.config.js')
const mongoose = require('mongoose')
mongoose.connect(dbConfig.url, {
	useMongoClient: true
})

mongoose.connection.on('error', function() {
  console.log('Could not connect to the database. Exiting now...')
  process.exit()
})
mongoose.connection.once('open', function() {
  console.log('Successfully connected to the database')
})

app.get('/', function(req, res) {
  res.json({"message": 'Basic Node API'})
})

consign()
	.include('./app/routes')
	.include('./app/middlewares')
	.into(app)

app.listen(3000, function() {
    console.log('Server is listening on port 3000')
})

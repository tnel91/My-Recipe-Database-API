const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.DEVELOPMENT_URI

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log(`Successfully connected to MongoDB via ${url}.`)
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db

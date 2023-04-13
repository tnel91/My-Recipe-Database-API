const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : 'mongodb://localhost:27017'

console.log(process.env.MONGODB_URI)

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log(`Successfully connected to MongoDB via ${MONGODB}.`)
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db

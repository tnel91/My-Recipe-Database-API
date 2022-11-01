const mongoose = require('mongoose')
require('dotenv').config()

let url = process.env.MONGODB_URI

mongoose
  .connect(url)
  .then(() => {
    console.log(`Successfully connected to MongoDB via ${url}.`)
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db

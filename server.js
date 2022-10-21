const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Recipe, Ingredient } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({ msg: `This route is being hit` })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})

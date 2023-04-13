const express = require('express')
const routes = require('./routes')
const db = require('./db')
const morgan = require('morgan')
const cors = require('cors')
// require('dotenv').config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// app.use(express.static(`${__dirname}/client/build`))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ msg: 'Server Works' }))
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/*', (req, res) => {
//   res.sendFile(`${__dirname}/client/build/index.html`)
// })

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))

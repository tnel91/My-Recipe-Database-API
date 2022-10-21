const db = require('../db')
const { Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const run = async () => {
  await main()
  db.close()
}

run()

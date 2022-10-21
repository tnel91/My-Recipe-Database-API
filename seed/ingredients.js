const db = require('../db')
const { Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ingredients = [
    {
      name: `Chicken Thighs`,
      quantity: 8,
      unit: `thighs`,
      perishable: true,
      photo: `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2018%2F08%2Fraw-chicken-thigh.jpg`
    },
    {
      name: `SALT`,
      quantity: 1,
      unit: `lbs`,
      perishable: false,
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kyz2hhBfwYCXzCilfMQJx80a08vQKEqlxw-r6b8jGjin5r5ih2KgCFdgXdSqzbi5WTk&usqp=CAU`
    },
    {
      name: `canned tomatoes`,
      quantity: 2,
      unit: `cans`,
      perishable: false,
      photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qualcJpSqWls8G06ncZRHS09Zu2B_xCrn7FEZGF5lQ8UF_GyD_J_sYEoga1YX12tK74&usqp=CAU`
    }
  ]
  await Ingredient.insertMany(ingredients)
  console.log('Added some ingredients!')
}

const run = async () => {
  await main()
  db.close()
}

run()

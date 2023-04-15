const { Recipe, Ingredient, User } = require('../models')

const deleteAllCreatedRecipes = async (req, res) => {
  const { admin } = res.locals.payload
  if (admin) {
    try {
      const deletedRecipes = await Recipe.deleteMany({
        createdAt: { $gte: '2023-04-14T02:23:00.000+00:00' }
      })
      console.log('RESET RECIPES')
      console.log(deletedRecipes)
      res.status(200).send(deletedRecipes)
    } catch (error) {
      res.status(500).send(error.message)
    }
  } else {
    res.status(403).send({ status: 'Error', msg: 'Forbidden' })
  }
}

const deleteAllCreatedIngredients = async (req, res) => {
  const { admin } = res.locals.payload
  if (admin) {
    try {
      const deletedIngredients = await Ingredient.deleteMany({
        createdAt: { $gte: '2023-04-15T02:36:00.000+00:00' }
      })
      console.log('RESET INGREDIENTS')
      console.log(deletedIngredients)
      res.status(200).send(deletedIngredients)
    } catch (error) {
      res.status(500).send(error.message)
    }
  } else {
    res.status(403).send({ status: 'Error', msg: 'Forbidden' })
  }
}

const deleteAllCreatedUsers = async (req, res) => {
  const { admin } = res.locals.payload
  if (admin) {
    try {
      const deletedUsers = await User.deleteMany({
        createdAt: { $gte: '2022-04-15T02:56:00.000+00:00' }
      })
      console.log('RESET USERS')
      console.log(deletedUsers)
      res.status(200).send(deletedUsers)
    } catch (error) {
      res.status(500).send(error.message)
    }
  } else {
    res.status(403).send({ status: 'Error', msg: 'Forbidden' })
  }
}

module.exports = {
  deleteAllCreatedRecipes,
  deleteAllCreatedIngredients,
  deleteAllCreatedUsers
}

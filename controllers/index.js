const { Recipe, Ingredient } = require('../models')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// app.get('/recipes/:name', async (req, res) => {
//   const recipe = await Recipe.find
//   res.json(recipe)
// })

module.exports = {
  getAllRecipes
}

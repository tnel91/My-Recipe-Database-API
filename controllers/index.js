const { Recipe, Ingredient } = require('../models')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchRecipesByName = async (req, res) => {
  try {
    const { name } = req.params
    console.log(name)
    const recipes = await Recipe.find({ name: /name/i })
    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRecipes,
  searchRecipesByName
}

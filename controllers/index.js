// const db = require('../db')
const { Recipe, Ingredient } = require('../models')

const getTwentyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({}, {}, { limit: 20 })
    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchRecipesByName = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const searchResults = await Recipe.aggregate([
      {
        $search: {
          index: 'RecipeSearchByName',
          text: { query: searchTerm, path: 'name' }
        }
      }
    ])
    res.status(200).json(searchResults)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const searchRecipesByIngredient = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const searchResults = await Recipe.aggregate([
      {
        $search: {
          index: 'RecipeSearchByIngredient',
          text: { query: searchTerm, path: 'ingredients' }
        }
      }
    ])
    res.status(200).json(searchResults)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewRecipe = async (req, res) => {
  try {
    let createdRecipe = await Recipe.create(req.body)
    res.status(200).json(createdRecipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getTwentyRecipes,
  searchRecipesByName,
  searchRecipesByIngredient,
  createNewRecipe
}

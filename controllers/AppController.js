const { Recipe, Ingredient, User } = require('../models')

const getManyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({}, {}, { limit: 100 })
    res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getOneRecipe = async (req, res) => {
  try {
    const { recipeId } = req.params
    const result = await Recipe.findById(recipeId)
    res.status(200).json(result)
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
  const { id } = res.locals.payload
  const newRecipe = { ...req.body, owner: id }
  try {
    const createdRecipe = await Recipe.create(newRecipe)
    const creator = await User.findById(id)
    creator.recipes.push(createdRecipe._id)
    const updatedUser = await User.findByIdAndUpdate(id, creator)
    res.status(200).send({
      recipe: createdRecipe,
      user: updatedUser
    })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getUser = async (req, res) => {
  const { id } = res.locals.payload
  try {
    const user = await User.findById(id).populate('recipes')
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateRecipe = async (req, res) => {
  const { id } = res.locals.payload
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedRecipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRecipe = async (req, res) => {
  const { id } = res.locals.payload
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.recipeId)
    res.json(deletedRecipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getManyIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find(
      {},
      {},
      { limit: 100, sort: { _id: -1 } }
    )
    res.status(200).json(ingredients)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateIngredient = async (req, res) => {
  const { id } = res.locals.payload
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(
      req.params.ingredientId,
      req.body,
      { new: true }
    )
    res.status(200).json(ingredient)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewIngredient = async (req, res) => {
  try {
    const createdIngredient = await Ingredient.create(req.body)
    res.status(200).json(createdIngredient)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteIngredient = async (req, res) => {
  const { id } = res.locals.payload
  try {
    const deleteIngredient = await Ingredient.findByIdAndDelete(
      req.params.ingredientId
    )
    res.status(200).json(deleteIngredient)
  } catch (error) {
    return res.status(500).send(error.mesage)
  }
}

module.exports = {
  getManyRecipes,
  getOneRecipe,
  searchRecipesByName,
  searchRecipesByIngredient,
  createNewRecipe,
  updateRecipe,
  deleteRecipe,
  getManyIngredients,
  updateIngredient,
  createNewIngredient,
  deleteIngredient,
  getUser
}

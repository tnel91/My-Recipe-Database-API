const mongoose = require('mongoose')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')

const Recipe = mongoose.model('Recipe', recipeSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = {
  Recipe,
  Ingredient
}

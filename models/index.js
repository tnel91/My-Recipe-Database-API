const mongoose = require('mongoose')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')
const userSchema = require('./user')

const Recipe = mongoose.model('Recipe', recipeSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Recipe,
  Ingredient,
  User
}

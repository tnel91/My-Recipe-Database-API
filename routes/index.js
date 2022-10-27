const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.json(`This route is being hit`))

router.get('/recipes', controllers.getTwentyRecipes)

router.get('/recipes/:recipeId', controllers.getOneRecipe)

router.get(
  '/recipe_search_by_name/:searchTerm',
  controllers.searchRecipesByName
)

router.get(
  '/recipe_search_by_ingr/:searchTerm',
  controllers.searchRecipesByIngredient
)

router.post('/recipes', controllers.createNewRecipe)

router.put('/recipes/:recipeId', controllers.updateRecipe)

router.delete('/recipes/:recipeId', controllers.deleteRecipe)

router.get('/pantry', controllers.getTwentyIngredients)

router.put('/ingredient/:ingredientId', controllers.updateIngredient)

router.post('/ingredient', controllers.createNewIngredient)

router.delete('/ingredient/:ingredientId', controllers.deleteIngredient)

module.exports = router

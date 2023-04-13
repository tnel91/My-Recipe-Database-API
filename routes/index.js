const { Router } = require('express')
const controllers = require('../controllers/AppController')
const authControllers = require('../controllers/AuthController')
const middleware = require('../middleware')
const router = Router()

router.get('/recipes', controllers.getManyRecipes)

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

router.get('/pantry', controllers.getManyIngredients)

router.post('/ingredient', controllers.createNewIngredient)

router.put('/ingredient/:ingredientId', controllers.updateIngredient)

router.delete('/ingredient/:ingredientId', controllers.deleteIngredient)

// Auth routes

router.post('/register', authControllers.register)

router.post('/login', authControllers.login)

// router.post('/login', authController.Login)

// router.get(
//   '/session',
//   middleware.stripToken,
//   middleware.verifyToken,
//   authController.CheckSession
// )

module.exports = router

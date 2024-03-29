const { Router } = require('express')
const controllers = require('../controllers/AppController')
const authControllers = require('../controllers/AuthController')
const adminControllers = require('../controllers/AdminController')
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

router.post(
  '/recipes',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createNewRecipe
)

router.put(
  '/recipes/:recipeId',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateRecipe
)

router.delete(
  '/recipes/:recipeId',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteRecipe
)

router.get('/pantry', controllers.getManyIngredients)

router.post(
  '/ingredient',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.createNewIngredient
)

router.put(
  '/ingredient/:ingredientId',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.updateIngredient
)

router.delete(
  '/ingredient/:ingredientId',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.deleteIngredient
)

router.get(
  '/user',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.getUser
)

// Auth routes

router.post('/register', authControllers.register)

router.post('/login', authControllers.login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.verifyUser,
  authControllers.checkSession
)
// Admin routes

router.delete(
  '/admin/reset_recipes',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.verifyUser,
  adminControllers.deleteAllCreatedRecipes
)

router.delete(
  '/admin/reset_ingredients',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.verifyUser,
  adminControllers.deleteAllCreatedIngredients
)

router.delete(
  '/admin/reset_users',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.verifyUser,
  adminControllers.deleteAllCreatedUsers
)

module.exports = router

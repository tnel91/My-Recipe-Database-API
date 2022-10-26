const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

// router.get('/', (req, res) => res.json(`This route is being hit`))

router.get('/recipes', controllers.getTwentyRecipes)

router.get('/recipes/:recipeId', controllers.getOneRecipe)

router.get('/recipes/:searchTerm', controllers.searchRecipesByName)

router.get('/ingredients/:searchTerm', controllers.searchRecipesByIngredient)

router.post('/recipes', controllers.createNewRecipe)

router.put('/recipes/:recipeId', controllers.updateRecipe)

router.delete('/recipes/:recipeId', controllers.deleteRecipe)

module.exports = router

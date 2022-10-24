const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.json(`This route is being hit`))

router.get('/recipes', controllers.getAllRecipes)

router.get('/recipes/:name', controllers.searchRecipesByName)

router.post('/recipes', controllers.createNewRecipe)

module.exports = router

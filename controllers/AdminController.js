const { Recipe, Ingredient, User } = require('../models')

const deleteAllCreatedRecipes = async (req, res) => {
  const { id, email, admin } = res.locals.payload
  console.log(admin)
  if (admin) {
    try {
      const deletedRecipes = await Recipe.deleteMany({
        createdAt: { $gte: '2023-04-14T02:23:23.359+00:00' }
      })
      console.log('DELORTED')
      console.log(deletedRecipes)
      res.status(200).send(deletedRecipes)
    } catch (error) {
      res.status(500).send(error.message)
    }
  } else {
    res.status(403).send({ status: 'Error', msg: 'Forbidden' })
  }
}
module.exports = {
  deleteAllCreatedRecipes
}

const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    yield: { type: String, required: false },
    totalTime: { type: String, required: false },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    photo: { type: String, required: false },
    url: { type: String, required: false },
    notes: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = recipeSchema

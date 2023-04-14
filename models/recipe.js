const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    yield: { type: String, required: false },
    totalTime: { type: String, required: false },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String, required: false },
    url: { type: String, required: false },
    notes: { type: String, required: false },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = recipeSchema

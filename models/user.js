const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }]
  },
  { timestamps: true }
)

module.exports = userSchema

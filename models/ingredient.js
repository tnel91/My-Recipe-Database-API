const { Schema } = require('mongoose')

const ingredientSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    perishable: { type: Boolean, require: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = ingredientSchema

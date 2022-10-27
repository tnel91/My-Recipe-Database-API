import { useState } from 'react'
import axios from 'axios'

const IngredientForm = (props) => {
  const ing = props.ingredient

  const [formState, setFormState] = useState({
    name: ing.name,
    quantity: ing.quantity,
    unit: ing.unit,
    perishable: ing.perishable,
    image: ing.image
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleCheckbox = (event) => {
    if (formState.perishable === false) {
      setFormState({ ...formState, [event.target.id]: true })
    } else {
      setFormState({ ...formState, [event.target.id]: false })
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios
      .put(`http://localhost:3001/api/ingredient/${ing._id}`, formState)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    props.revertCard(response)
  }

  return (
    <div className="recipe-card">
      <h3>Editing Ingredient</h3>
      <form id="ingredientForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" onChange={handleChange} value={formState.name} />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          onChange={handleChange}
          value={formState.quantity}
        />
        <label htmlFor="unit">Unit:</label>
        <input id="unit" onChange={handleChange} value={formState.unit} />
        <label htmlFor="perishable">Perishable:</label>
        <input
          id="perishable"
          onChange={handleCheckbox}
          checked={formState.perishable}
          type="checkbox"
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          onChange={handleChange}
          value={formState.image}
          type="url"
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default IngredientForm

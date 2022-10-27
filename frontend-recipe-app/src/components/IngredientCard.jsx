import { useState } from 'react'
import axios from 'axios'

const IngredientCard = (props) => {
  const [ingredient, setIngredient] = useState(props.ingredient)

  const cardId = `cardId${ingredient._id}`
  const formId = `formId${ingredient._id}`
  const nameId = `nameId${ingredient._id}`
  const quantityId = `quantityId${ingredient._id}`
  const unitId = `unitId${ingredient._id}`
  const perishableId = `perishableId${ingredient._id}`
  const imageId = `imageId${ingredient._id}`

  const editCard = () => {
    document.getElementById(cardId).style.display = 'none'
    document.getElementById(formId).style.display = ''
  }

  const revertCard = () => {
    document.getElementById(cardId).style.display = ''
    document.getElementById(formId).style.display = 'none'
  }

  const [formState, setFormState] = useState({
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
    perishable: ingredient.perishable,
    image: ingredient.image
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleCheckbox = (event) => {
    if (formState.perishable === false) {
      setFormState({ ...formState, [event.target.name]: true })
    } else {
      setFormState({ ...formState, [event.target.name]: false })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios
      .put(`http://localhost:3001/api/ingredient/${ingredient._id}`, formState)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setIngredient(response)
    revertCard()
  }

  const deleteIngredient = async () => {
    console.log('deleted')
    const response = await axios
      .delete(`http://localhost:3001/api/ingredient/${ingredient._id}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    props.removeFromList(ingredient._id)
  }

  return (
    <div>
      <div
        id={cardId}
        style={{ display: '' }}
        className="recipe-card"
        onClick={() => editCard()}
      >
        <div className="img-wrapper">
          <img src={ingredient.image} alt="Recipe Image" />
        </div>
        <h3>{ingredient.name}</h3>
        <p>{ingredient.quantity}</p>
        <p>{ingredient.unit}</p>
        <p>{ingredient.perishable}</p>
      </div>
      <div id={formId} style={{ display: 'none' }} className="recipe-card">
        <h3>Editing Ingredient</h3>
        <form id="ingredientForm" onSubmit={handleSubmit}>
          <label htmlFor={nameId}>Name:</label>
          <input
            id={nameId}
            name="name"
            onChange={handleChange}
            value={formState.name}
          />
          <label htmlFor={quantityId}>Quantity:</label>
          <input
            id={quantityId}
            name="quantity"
            onChange={handleChange}
            value={formState.quantity}
          />
          <label htmlFor={unitId}>Unit:</label>
          <input
            id={unitId}
            name="unit"
            onChange={handleChange}
            value={formState.unit}
          />
          <label htmlFor={perishableId}>Perishable:</label>
          <input
            id={perishableId}
            name="perishable"
            onChange={handleCheckbox}
            checked={formState.perishable}
            type="checkbox"
          />
          <label htmlFor={imageId}>Image:</label>
          <input
            id={imageId}
            name="image"
            onChange={handleChange}
            value={formState.image}
            type="url"
          />
          <button type="submit">Edit</button>
        </form>
        <button onClick={revertCard}>Cancel</button>
        <button onClick={deleteIngredient}>Delete</button>
      </div>
    </div>
  )
}

export default IngredientCard

import { useState } from 'react'
import axios from 'axios'

const IngredientCard = (props) => {
  const [ingredient, setIngredient] = useState(props.ingredient)

  const [formState, setFormState] = useState({
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
    perishable: ingredient.perishable,
    image: ingredient.image
  })

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
    let confirm = window.confirm('Delete ingredient forever?')
    if (confirm === true) {
      await axios
        .delete(`http://localhost:3001/api/ingredient/${ingredient._id}`)
        .then(() => {
          props.removeFromList(ingredient._id)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  let perishable

  if (ingredient.perishable === true) {
    perishable = 'perishable'
  } else {
    perishable = 'non-perishable'
  }

  return (
    <div>
      <div
        id={cardId}
        style={{ display: '' }}
        className="ingredient card"
        onClick={() => editCard()}
      >
        <div className="img-wrapper">
          <img src={ingredient.image} alt="Ingredient Image" />
        </div>
        <h3>{ingredient.name.toUpperCase()}</h3>
        <p>{ingredient.quantity + ' ' + ingredient.unit}</p>
        <p>{perishable}</p>
      </div>
      <div id={formId} style={{ display: 'none' }} className="ingredient card">
        <form className="ingredient-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor={nameId}>Name:</label>
            <input
              id={nameId}
              name="name"
              onChange={handleChange}
              value={formState.name}
              size="17"
              placeholder="required"
              required
            />
          </div>
          <div>
            <label htmlFor={quantityId}>Quantity:</label>
            <input
              id={quantityId}
              name="quantity"
              onChange={handleChange}
              value={formState.quantity}
              size="14"
              placeholder="required"
              required
            />
          </div>
          <div>
            <label htmlFor={unitId}>Unit:</label>
            <input
              id={unitId}
              name="unit"
              onChange={handleChange}
              value={formState.unit}
              size="18"
            />
          </div>
          <div>
            <label htmlFor={perishableId}>Perishable:</label>
            <input
              className="checkbox"
              id={perishableId}
              name="perishable"
              onChange={handleCheckbox}
              checked={formState.perishable}
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor={imageId}>Image:</label>
            <input
              id={imageId}
              name="image"
              onChange={handleChange}
              value={formState.image}
              type="url"
              size="17"
            />
          </div>
          <button type="submit">Edit Ingredient</button>
          <button type="button" onClick={revertCard}>
            Cancel Changes
          </button>
          <button type="button" onClick={deleteIngredient}>
            Delete Ingredient
          </button>
        </form>
      </div>
    </div>
  )
}

export default IngredientCard

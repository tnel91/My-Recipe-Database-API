import { useState, useEffect } from 'react'
import axios from 'axios'

const IngredientCard = (props) => {
  const [ingredient, setIngredient] = useState(props.ingredient)
  // const [edited, setEditState] = useState(false)

  const editCard = () => {
    console.log('editing')
    ///show form, hide card, thats it
  }

  const revertCard = () => {
    ///hide form, show card, thats it
    // setEditState(true)
  }

  const [formState, setFormState] = useState({
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: ingredient.unit,
    perishable: ingredient.perishable,
    image: ingredient.image
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

  // const updateIngredient = async () => {
  //   console.log('updating')
  //   await axios.get().then().catch()
  // }

  // useEffect(() => {
  //   console.log('fired')
  //   if (edited === false) {
  //     console.log('false')
  //     return
  //   } else if (edited === true) {
  //     console.log('true')
  //     updateIngredient()
  //   }
  // }, [ingredient.updatedAt])

  return (
    <div>
      <div
        style={{ visibility: 'hidden' }}
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
      <div style={{ visibility: 'visible' }} className="recipe-card">
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
    </div>
  )
}

export default IngredientCard

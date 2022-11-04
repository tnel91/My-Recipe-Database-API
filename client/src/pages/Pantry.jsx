import axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientCard from '../components/IngredientCard'
// import PantrySearch from '../components/PantrySearch'

const Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const Pantry = () => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    await axios
      .get(`${Base_URL}/pantry`)
      .then((response) => {
        setIngredients(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const initialState = {
    name: '',
    quantity: '',
    unit: '',
    perishable: false,
    image: ''
  }

  const [formState, setFormState] = useState(initialState)

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
    await axios
      .post(`${Base_URL}/ingredient`, formState)
      .then((response) => {
        setIngredients([response.data, ...ingredients])
        setFormState(initialState)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  const removeFromList = (id) => {
    let index
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i]._id === id) {
        index = i
        break
      }
    }
    setIngredients([
      ...ingredients.slice(0, index),
      ...ingredients.slice(index + 1, ingredients.length)
    ])
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div className="pantry">
      <h2>Pantry</h2>
      <form onSubmit={handleSubmit}>
        <fieldset id="newIngredientForm">
          <legend>Create New Ingredient</legend>
          <div>
            <label htmlFor="newName">Name:</label>
            <input
              id="newName"
              name="name"
              onChange={handleChange}
              value={formState.name}
              placeholder="required"
              required
            />
          </div>
          <div>
            <label htmlFor="newQuantity">Quantity:</label>
            <input
              id="newQuantity"
              name="quantity"
              onChange={handleChange}
              value={formState.quantity}
              placeholder="required"
              required
            />
          </div>
          <div>
            <label htmlFor="newUnit">Unit:</label>
            <input
              id="newUnit"
              name="unit"
              onChange={handleChange}
              value={formState.unit}
            />
          </div>
          <div id="new-ing-checkdiv">
            <label htmlFor="newPerishable">Perishable?</label>
            <input
              className="pointer checkbox"
              id="newPerishable"
              name="perishable"
              onChange={handleCheckbox}
              checked={formState.perishable}
              type="checkbox"
            />
          </div>
          <div>
            <label htmlFor="newImage">Image URL:</label>
            <input
              id="newImage"
              name="image"
              onChange={handleChange}
              value={formState.image}
              type="url"
            />
          </div>
          <div>
            <button type="submit">Create Ingredient</button>
          </div>
        </fieldset>
      </form>
      <section className="ingredient-grid">
        {ingredients.map((ingredient) => (
          <div key={ingredient._id}>
            <IngredientCard
              ingredient={ingredient}
              removeFromList={removeFromList}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Pantry

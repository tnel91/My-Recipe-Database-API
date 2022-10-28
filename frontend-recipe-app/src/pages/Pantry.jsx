import axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientCard from '../components/IngredientCard'
import PantrySearch from '../components/PantrySearch'

const Pantry = () => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    const ingredients = await axios
      .get('http://localhost:3001/api/pantry')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setIngredients(ingredients)
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
      .post(`http://localhost:3001/api/ingredient`, formState)
      .then((response) => {
        setIngredients([response.data, ...ingredients])
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data)
      })
    setFormState(initialState)
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
    <div>
      <PantrySearch />
      <h1>Pantry</h1>
      <form id="newIngredientForm" onSubmit={handleSubmit}>
        <label htmlFor="newName">Name:</label>
        <input
          id="newName"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="newQuantity">Quantity:</label>
        <input
          id="newQuantity"
          name="quantity"
          onChange={handleChange}
          value={formState.quantity}
        />
        <label htmlFor="newUnit">Unit:</label>
        <input
          id="newUnit"
          name="unit"
          onChange={handleChange}
          value={formState.unit}
        />
        <label htmlFor="newPerishable">Perishable:</label>
        <input
          id="newPerishable"
          name="perishable"
          onChange={handleCheckbox}
          checked={formState.perishable}
          type="checkbox"
        />
        <label htmlFor="newImage">Image URL:</label>
        <input
          id="newImage"
          name="image"
          onChange={handleChange}
          value={formState.image}
          type="url"
        />
        <button type="submit">Create New Ingredient</button>
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

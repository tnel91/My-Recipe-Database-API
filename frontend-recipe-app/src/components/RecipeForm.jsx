import { useState } from 'react'
import axios from 'axios'

const RecipeForm = () => {
  const initialState = {
    name: '',
    description: '',
    yield: '',
    totalTime: '',
    ingredients: '',
    instructions: '',
    photo: '',
    url: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newRecipe = await axios
      .post('http://localhost:3001/api/recipes', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(`created new recipe`, newRecipe.data)
    // setFormState(initialState)
  }

  return (
    <div id="recipeFormDiv">
      <h2 id="recipeFormHeading">Create Recipe</h2>
      <form id="recipeForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input id="name" onChange={handleChange} value={formState.name}></input>
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          onChange={handleChange}
          value={formState.description}
        ></textarea>
        <label htmlFor="yield">Yield:</label>
        <input
          id="yield"
          onChange={handleChange}
          value={formState.yield}
        ></input>
        <label htmlFor="totalTime">Total Time:</label>
        <input
          id="totalTime"
          onChange={handleChange}
          value={formState.totalTime}
        ></input>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          onChange={handleChange}
          value={formState.ingredients}
        ></textarea>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          onChange={handleChange}
          value={formState.instructions}
        ></textarea>
        <label htmlFor="photo">Photo:</label>
        <input
          id="photo"
          onChange={handleChange}
          value={formState.photo}
        ></input>
        <label htmlFor="url">URL:</label>
        <input id="url" onChange={handleChange} value={formState.url}></input>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          onChange={handleChange}
          value={formState.notes}
        ></textarea>
        <button id="recipeSubmit" type="submit">
          Submit
        </button>
      </form>
      <div className="Response"></div>
    </div>
  )
}

export default RecipeForm

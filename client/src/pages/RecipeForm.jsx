import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

const Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const RecipeForm = (props) => {
  let { recipeId } = useParams()
  let navigate = useNavigate()

  const initialState = {
    name: '',
    description: '',
    yield: '',
    totalTime: '',
    ingredients: '',
    instructions: '',
    image: '',
    url: '',
    notes: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (props.updateForm) {
      await axios
        .put(`${Base_URL}/recipes/${recipeId}`, formState)
        .then(() => {
          navigate(`/recipes/${recipeId}`)
        })
        .catch((error) => {
          alert(error.response.data)
        })
    } else {
      await axios
        .post(`${Base_URL}/recipes`, formState)
        .then((response) => {
          navigate(`/recipes/${response.data._id}`)
        })
        .catch((error) => {
          alert(error.response.data)
        })
    }
  }

  const updateTemplate = async () => {
    const recipe = await axios
      .get(`${Base_URL}/recipes/${recipeId}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    const recipeState = {
      name: recipe.name,
      description: recipe.description,
      yield: recipe.yield,
      totalTime: recipe.totalTime,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      image: recipe.image,
      url: recipe.url,
      notes: recipe.notes
    }
    setFormState(recipeState)
  }

  useEffect(() => {
    if (props.updateForm) {
      updateTemplate()
    }
  }, [recipeId])

  return (
    <div className="recipe-form">
      {/* <h2 id="recipe-form-heading">{props.heading}</h2> */}
      <button form="recipe-form-grid" id="recipeSubmit" type="submit">
        {props.submit}
      </button>
      <p id="form-note">
        <span className="bold">Note:</span> When filling out Ingredients and
        Instructions in this form, please ensure each ingredient/step is
        separated by a line break to ensure proper formatting.
      </p>
      <form id="recipe-form-grid" onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input
          id="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="required"
          required
        />
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          onChange={handleChange}
          value={formState.description}
        ></textarea>
        <label htmlFor="yield">Yield:</label>
        <input id="yield" onChange={handleChange} value={formState.yield} />
        <label htmlFor="totalTime">Total Time:</label>
        <input
          id="totalTime"
          onChange={handleChange}
          value={formState.totalTime}
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          onChange={handleChange}
          value={formState.ingredients}
          placeholder="required"
          required
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          onChange={handleChange}
          value={formState.instructions}
          placeholder="required"
          required
        />
        <label htmlFor="image">Image:</label>
        <input id="image" onChange={handleChange} value={formState.image} />
        <label htmlFor="url">URL:</label>
        <input id="url" onChange={handleChange} value={formState.url} />
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" onChange={handleChange} value={formState.notes} />
      </form>
      <div className="Response"></div>
    </div>
  )
}

export default RecipeForm

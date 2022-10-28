import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

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
      let updatedRecipe = await axios
        .put(`http://localhost:3001/api/recipes/${recipeId}`, formState)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error)
          alert(error.response.data)
        })
      console.log(`updated recipe`, updatedRecipe)
      navigate(`/recipes/${recipeId}`)
    } else {
      await axios
        .post(`http://localhost:3001/api/recipes`, formState)
        .then((response) => {
          navigate(`/recipes/${response.data._id}`)
        })
        .catch((error) => {
          console.log(error)
          alert(error.response.data)
        })
      setFormState(initialState)
    }
  }

  const updateTemplate = async () => {
    const recipe = await axios
      .get(`http://localhost:3001/api/recipes/${recipeId}`)
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
    <div id="recipeFormDiv">
      <h2 id="recipeFormHeading">{props.heading}</h2>
      <form id="recipeForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input id="name" onChange={handleChange} value={formState.name} />
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
        />
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          onChange={handleChange}
          value={formState.instructions}
        />
        <label htmlFor="image">Image:</label>
        <input id="image" onChange={handleChange} value={formState.image} />
        <label htmlFor="url">URL:</label>
        <input id="url" onChange={handleChange} value={formState.url} />
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" onChange={handleChange} value={formState.notes} />
        <button id="recipeSubmit" type="submit">
          {props.submit}
        </button>
      </form>
      <div className="Response"></div>
    </div>
  )
}

export default RecipeForm

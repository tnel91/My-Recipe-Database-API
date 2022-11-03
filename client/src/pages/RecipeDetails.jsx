import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const RecipeDetails = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState({
    name: '',
    description: '',
    yield: '',
    totalTime: '',
    ingredients: [],
    instructions: [],
    image: '',
    url: '',
    notes: ''
  })

  let { recipeId } = useParams()
  let navigate = useNavigate()

  const setRecipe = async () => {
    const response = await axios
      .get(`${Base_URL}/recipes/${recipeId}`)
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
    setSelectedRecipe(response)
    setRecipeDetails({
      name: response.name.toUpperCase(),
      description: response.description,
      yield: response.yield,
      totalTime: response.totalTime,
      ingredients: response.ingredients.split('\n'),
      instructions: response.instructions.split('\n'),
      image: response.image,
      url: response.url,
      notes: response.notes
    })
  }

  const deleteRecipe = async () => {
    let confirm = window.confirm('Delete recipe forever?')
    if (confirm === true) {
      await axios
        .delete(`${Base_URL}/recipes/${recipeId}`)
        .then(() => {
          navigate(`/recipes`)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const showUpdateForm = (id) => {
    navigate(`/recipes/form/${id}`)
  }

  let notes
  if (recipeDetails.notes != '') {
    notes = (
      <div className="recipe-notes">
        <h3>Notes</h3>
        <p>{recipeDetails.notes}</p>
      </div>
    )
  } else {
    notes = undefined
  }

  useEffect(() => {
    setRecipe()
  }, [recipeId])

  return (
    <div className="recipe-details">
      <div>
        <h2>{recipeDetails.name}</h2>
        <div className="recipe-nav">
          <button className="button" onClick={() => showUpdateForm(recipeId)}>
            Edit Recipe
          </button>
          <button className="button" onClick={() => deleteRecipe()}>
            Delete Recipe
          </button>
          <button
            className="button"
            onClick={() => window.open(recipeDetails.url)}
          >
            Source
          </button>
        </div>
      </div>
      <div className="details">
        <img
          className="recipe-image"
          src={recipeDetails.image}
          alt="Recipe Image"
        />
        <ul className="recipe-ingredients">
          <h3>Ingredients</h3>
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <ol className="recipe-instructions">
          <h3>Instructions</h3>
          {recipeDetails.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        {notes}
      </div>
    </div>
  )
}

export default RecipeDetails

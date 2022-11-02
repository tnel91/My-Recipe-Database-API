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
    url: ''
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
      url: response.url
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

  useEffect(() => {
    setRecipe()
  }, [recipeId])

  return (
    <div className="recipe-details">
      <button className="button" onClick={() => showUpdateForm(recipeId)}>
        Edit Recipe
      </button>
      <button className="button" onClick={() => deleteRecipe()}>
        Delete Recipe
      </button>
      <button className="button" onClick={() => window.open(recipeDetails.url)}>
        Source
      </button>
      <h1>{recipeDetails.name}</h1>
      <div className="recipe-details">
        <img
          className="recipe-image"
          src={recipeDetails.image}
          alt="Recipe Image"
        />
        <ul className="recipe-ingredients">
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <ol className="recipe-instructions">
          {recipeDetails.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetails

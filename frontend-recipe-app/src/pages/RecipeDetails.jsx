import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeDetails = (props) => {
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

  const setRecipe = async () => {
    const response = await axios
      .get(`http://localhost:3001/api/recipes/${recipeId}`)
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

  useEffect(() => {
    setRecipe()
  }, [recipeId])

  return (
    <div>
      <h2>Recipe Details</h2>
      <button onClick={() => props.showUpdateForm(recipeId)}>
        Edit Recipe
      </button>
      <h1>{recipeDetails.name}</h1>
      {/* <img src={recipeDetails.image} alt="Recipe Image" /> */}
      <ul className="recipe-ingredients">
        {recipeDetails.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <br />
      <ol className="recipe-instructions">
        {recipeDetails.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetails

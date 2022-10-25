import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeDetails = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState({
    name: '',
    description: '',
    yield: '',
    totalTime: '',
    ingredients: '',
    instructions: '',
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
      ingredients: response.ingredients,
      instructions: response.instructions,
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
      <h1>{recipeDetails.name}</h1>
      {/* <img src={recipeDetails.image} alt="Recipe Image" /> */}
      <p>{recipeDetails.ingredients}</p>
    </div>
  )
}

export default RecipeDetails

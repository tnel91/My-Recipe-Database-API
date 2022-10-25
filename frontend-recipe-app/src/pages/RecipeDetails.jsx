import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RecipeDetails = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  let { recipeId } = useParams()

  const setRecipe = async () => {
    await axios.get(`http://localhost:3001/api/recipes/${recipeId}`)
  }

  useEffect(() => {
    setRecipe()
  }, [recipeId])

  return (
    <div>
      <h1>Recipe Details</h1>
    </div>
  )
}

export default RecipeDetails

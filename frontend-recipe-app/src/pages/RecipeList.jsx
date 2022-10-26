import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import RecipeCard from '../components/RecipeCard'

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    const response = await axios
      .get('http://localhost:3001/api/recipes')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setRecipes(response)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <h1>Recipe List</h1>
      <Link to="/recipes/form">Create Recipe</Link>
      <div className="search"></div>
      <div className="results">
        <h2>Recipes</h2>
        <section className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe._id}>
              <RecipeCard
                id={recipe._id}
                name={recipe.name}
                yield={recipe.yield}
                totalTime={recipe.totalTime}
                image={recipe.image}
                onClick={props.showRecipeDetails}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default RecipeList

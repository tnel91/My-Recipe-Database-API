import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import RecipeSearch from '../components/RecipeSearch'
import RecipeCard from '../components/RecipeCard'

const RecipeList = (props) => {
  let navigate = useNavigate()

  const [recipes, setRecipes] = useState([])
  const [searchQuery, setSearchQuery] = useState({
    searchType: 'Name',
    query: ''
  })

  const getRecipes = async () => {
    await axios
      .get('http://localhost:3001/api/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (searchQuery.searchType === 'Name') {
      await axios
        .get(
          `http://localhost:3001/api/recipe_search_by_name/${searchQuery.query}`
        )
        .then((response) => {
          setRecipes(response.data)
          setSearchQuery({ ...searchQuery, query: '' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
    if (searchQuery.searchType === 'Ingredients') {
      await axios
        .get(
          `http://localhost:3001/api/recipe_search_by_ingr/${searchQuery.query}`
        )
        .then((response) => {
          setRecipes(response.data)
          setSearchQuery({ ...searchQuery, query: '' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const showRecipeDetails = (id) => {
    navigate(`/recipes/${id}`)
  }

  const showCreateForm = () => {
    navigate('/recipes/form')
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <button className="recipe-details-button" onClick={showCreateForm}>
        Create New Recipe
      </button>
      <div className="search">
        <RecipeSearch
          handleChange={handleChange}
          query={searchQuery.query}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="results">
        <h2>Recipe List</h2>
        <section className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe._id}>
              <RecipeCard
                id={recipe._id}
                name={recipe.name}
                yield={recipe.yield}
                totalTime={recipe.totalTime}
                image={recipe.image}
                onClick={showRecipeDetails}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default RecipeList

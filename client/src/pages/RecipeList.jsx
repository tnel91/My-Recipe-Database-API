import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import RecipeSearch from '../components/RecipeSearch'
import RecipeCard from '../components/RecipeCard'

let Base_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api'

const RecipeList = () => {
  let navigate = useNavigate()

  const [recipes, setRecipes] = useState([])
  const [searchQuery, setSearchQuery] = useState({
    searchType: 'Name',
    query: ''
  })

  const getRecipes = async () => {
    await axios
      .get(`${Base_URL}/recipes`)
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
        .get(`${Base_URL}/recipe_search_by_name/${searchQuery.query}`)
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
        .get(`${Base_URL}/recipe_search_by_ingr/${searchQuery.query}`)
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

  let resultList
  if (recipes.length > 0) {
    resultList = (
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
    )
  } else {
    resultList = <h3>No Results!</h3>
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="recipe-list">
      <button className="button" onClick={showCreateForm}>
        Create New Recipe
      </button>
      <div className="search">
        <RecipeSearch
          handleChange={handleChange}
          query={searchQuery.query}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="results">{resultList}</div>
    </div>
  )
}

export default RecipeList

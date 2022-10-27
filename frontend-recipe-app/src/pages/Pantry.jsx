import axios from 'axios'
import { useState, useEffect } from 'react'

import IngredientCard from '../components/IngredientCard'
import PantrySearch from '../components/PantrySearch'
import PantryForm from '../components/IngredientForm'

const Pantry = () => {
  const [ingredients, setIngredients] = useState([])

  const getIngredients = async () => {
    const ingredients = await axios
      .get('http://localhost:3001/api/pantry')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log(error)
      })
    setIngredients(ingredients)
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div>
      <PantrySearch />
      <h1>Pantry</h1>
      <section className="ingredient-grid">
        {ingredients.map((ingredient) => (
          <div key={ingredient._id}>
            <IngredientCard ingredient={ingredient} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Pantry
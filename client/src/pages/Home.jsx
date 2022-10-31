import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const toRecipes = () => {
    navigate('/recipes')
  }

  const toPantry = () => {
    navigate('/pantry')
  }

  return (
    <div className="home">
      <h1>Home Page</h1>
      <button className="button" onClick={toRecipes}>
        Recipes
      </button>
      <button className="button" onClick={toPantry}>
        Pantry
      </button>
    </div>
  )
}

export default Home

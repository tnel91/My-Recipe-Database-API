import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-div">
        <h1>My Recipe Database</h1>
        <h3>Welcome!</h3>
        <button
          className="button"
          onClick={() => {
            navigate('/recipes')
          }}
        >
          Recipes
        </button>
        <button
          className="button"
          onClick={() => {
            navigate('/pantry')
          }}
        >
          Pantry
        </button>
      </div>
    </div>
  )
}

export default Home

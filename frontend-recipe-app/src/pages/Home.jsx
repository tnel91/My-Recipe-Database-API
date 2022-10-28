import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="navLink">
        <Link to="/recipes">Recipes</Link>
      </div>
      <div className="navLink">
        <Link to="/pantry">Pantry</Link>
      </div>
    </div>
  )
}

export default Home

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link id="push-left" to="/about">
        About
      </Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/pantry">Pantry</Link>
    </nav>
  )
}

export default Header

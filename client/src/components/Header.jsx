import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/pantry">Pantry</Link>
      </nav>
    </header>
  )
}

export default Header

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navLink">
          <Link to="/">Home</Link>
        </div>
        <div className="navLink">
          <Link to="/about">About</Link>
        </div>
        <div className="navLink">
          <Link to="/recipes">Recipes</Link>
        </div>
        <div className="navLink">
          <Link to="/pantry">Pantry</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

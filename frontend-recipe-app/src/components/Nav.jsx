import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
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
        <Link to="/recipes/details">Recipe Details</Link>
      </div>
      <div className="navLink">
        <Link to="/recipes/form">Recipe Form</Link>
      </div>
    </nav>
  )
}

export default Nav

import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import RecipeList from './pages/RecipeList'
import RecipeForm from './pages/RecipeForm'
import RecipeDetails from './pages/RecipeDetails'

const App = () => {
  let navigate = useNavigate()

  const showRecipeDetails = (id) => {
    navigate(`/recipes/${id}`)
  }

  const showUpdateForm = (id) => {
    navigate(`/recipes/form/${id}`)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/recipes"
            element={<RecipeList showRecipeDetails={showRecipeDetails} />}
          />
          <Route path="/recipes/form" element={<RecipeForm formType="new" />} />
          <Route
            path="/recipes/form/:recipeId"
            element={<RecipeForm formType="update" />}
          />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetails showUpdateForm={showUpdateForm} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

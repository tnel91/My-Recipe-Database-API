import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import RecipeList from './pages/RecipeList'
import RecipeForm from './pages/RecipeForm'
import RecipeDetails from './pages/RecipeDetails'
import Pantry from './pages/Pantry'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route
            path="/recipes/form"
            element={
              <RecipeForm heading="Create New Recipe" submit="Create Recipe" />
            }
          />
          <Route
            path="/recipes/form/:recipeId"
            element={
              <RecipeForm
                updateForm="true"
                heading="Update Recipe"
                submit="Update Recipe"
              />
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/pantry" element={<Pantry />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

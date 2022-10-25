import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/form" element={<RecipeForm />} />
          <Route path="/recipes/details" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

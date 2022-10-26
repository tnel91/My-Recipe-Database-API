const RecipeSearch = (props) => {
  return (
    <div>
      <h2>Recipe Search</h2>
      <form id="Search-form">
        <label for="searchType">Search recipes by:</label>
        <select id="searchType" name="searchType">
          <option value="Name">Name</option>
          <option value="Ingredients">Ingredients</option>
        </select>
        <input
          type="text"
          name="search"
          onChange={props.handleChange}
          value={props.searchQuery}
          placeholder="Search Recipes"
        />
        <button type="submit">search</button>
      </form>
    </div>
  )
}

export default RecipeSearch

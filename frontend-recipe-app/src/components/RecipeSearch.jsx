const RecipeSearch = (props) => {
  return (
    <div>
      <h2>Recipe Search</h2>
      <form id="Search-form">
        <label for="searchType">Search Recipes By:</label>
        <select id="searchType" name="type" onChange={props.handleChange}>
          <option value="Name">Name</option>
          <option value="Ingredients">Ingredients</option>
        </select>
        <input
          type="text"
          name="query"
          onChange={props.handleChange}
          value={props.query}
          placeholder="Search Recipes"
        />
        <button type="submit">search</button>
      </form>
    </div>
  )
}

export default RecipeSearch

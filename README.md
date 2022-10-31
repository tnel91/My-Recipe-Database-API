# Recipe Organizer App

## Date: 10/19/2022

### By: Travis Nelson

#### [GitHub](https://github.com/tnel91/Travis_Recipe_App) | [LinkedIn](https://www.linkedin.com/in/travis-nelson91/) | [Trello](https://trello.com/b/m0n2neWP/travis-recipe-app) | [Heroku Deployment](https://recipedb-app.herokuapp.com/)

---

### **_Description_**

The plan is to create an app that allows a user to create recipes and upload them to a database. The user will be able to search for, view, update, and delete recipes from the database. There will also be a separate page for tracking the contents of the user's pantry. It will render cards for each ingredient, showing name and quantity. The user will be able filter ingredients by tag, in addition to CRUD operations.

---

### **_Technologies Used_**

- Visual Studio Code
- Git/Github
- MongoDB
- Mongoose
- Express
- React
- Heroku

---

### **_Getting Started_**

#### _Production_

- Navigate to the [Heroku Deployment](https://recipedb-app.herokuapp.com/) page.
- Note: The Heroku deployment currently only comunicates with the server if it is runing in the local environment.

#### _Development_

- `Fork` and `Clone` this repo
- `cd` into directory
- run `npm install`
- Create a `.env` file in the root of the directory and insert your `MONGODB_URI` connection string.

---

### **_Screenshots_**

#### _Recipe List Page_

![Recipe List Page](https://i.imgur.com/5i9cjCL.png)

#### _Pantry Page_

![Pantry Page](https://i.imgur.com/VICWPak.png)

---

### **_Project Guidelines_**

#### **Frontend**

- App.js will contain routing for the app.
- Home.js will contain the landing page with links to the RecipeDB.js and Pantry.js pages.
- RecipeDB.js will contain a component for a search bar and will render recipe cards on search. Will contain a button to link to a page with fields to add a recipe. Clicking a card will link to RecipeDetails.js, which contains a button to edit the recipe.
- Pantry.js will contain a component containing a create food field. food items will be rendered as cards in a flex grid. A search bar will filter the food items by name or tag.

#### _Component Hierarchy Diagram_

![Component Hierarchy Diagram](https://i.imgur.com/k9dkZNn.png)

---

#### **Backend**

- Database will need two collections, one for recipes and one for pantry items.
- Routes for adding or updating a recipe/pantry item will need to differentiate the two actions, but can use the same field if possible.

#### _Entity Relationship Diagram_

![Entity Relationship Diagram](https://i.imgur.com/o8JnjLF.png)

---

### **_Future Updates_**

- Implement search/filter functionality on pantry ingredients.

---

### Credits

##### Project Prompt: [Github](https://github.com/SEI-R-9-19/u2_project_prompt)

##### Image Hosting [Imgur](https://imgur.com/)

##### Search Engine [Google](http://google.com)

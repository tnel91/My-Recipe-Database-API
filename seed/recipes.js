const db = require('../db')
const { Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes = [
    {
      name: `CREAMY COCONUT LENTIL CURRY`,
      description: `This easy to make Creamy Coconut Lentil Curry is a healthy vegan recipe that makes a perfect meatless Monday dinner recipe. It takes less than an hour (mostly hands-off time) to make and is packed full of delicious Indian flavors. Make extras and you'll have a giant smile on your face at lunch the next day.`,
      yield: `6 servings`,
      totalTime: `1 HR`,
      ingredients: [
        `1 tablespoon coconut oil`,
        `1 tablespoon each: cumin seeds and coriander seeds`,
        `1 head garlic, chopped (10-12 cloves)`,
        `28 ounce can of crushed tomatoes`,
        `2 tablespoons ginger, chopped`,
        `1 tablespoon turmeric`,
        `2 teaspoons sea salt`,
        `1 cup dried brown lentils`,
        `1-2 teaspoons cayenne powder, optional`,
        `3 cups water`,
        `15 ounce can coconut milk`,
        `A few handfuls of cherry tomatoes`,
        `1 cup chopped cilantro`
      ],
      instructions: `Heat the coconut oil in a large pot or skillet over medium-high heat. Add the cumin and coriander seeds and toast until they start to brown, about 45 seconds. Add the garlic to the pot and let it brown, about 2 minutes.
      Add the can of crushed tomatoes, ginger, turmeric, and sea salt to the pot and cook, stirring the pot a few times, for 5 minutes. Add the lentils and, if using, the cayenne powder, and the water to the pot and bring it to a boil. Reduce the heat to low, cover the pot, and let it simmer for 35-40 minutes, or until the lentils are soft. Stir the pot a few times to prevent the lentils from sticking to the bottom. If the curry starts to look dry, add an extra ½ – 1 cup of water.
      Once the lentils are soft and the curry is thick, add the coconut milk and cherry tomatoes and bring the pot back to a simmer. Remove the pot from the heat and stir in the cilantro.`,
      photo: `https://www.theendlessmeal.com/wp-content/uploads/2016/07/Creamy-Coconut-Lentil-Curry-680-4.jpg`,
      url: `https://www.theendlessmeal.com/creamy-coconut-lentil-curry/`
    },
    {
      name: `Sweet Spicy Gochujang Chicken`,
      description: `Sweet Spicy Gochujang Chicken. Crispy chicken bites smothered in a glossy spicy sweet sauce with a gochujang base. The perfect main to some steamed rice and leafy greens. This is a winner-winner chicken dinner or lunch! Also great for meal prep too! Ready in just 30 minutes.`,
      yield: `5 servings`,
      totalTime: `30 mins`,
      ingredients: [
        `6 boneless skinless chicken thighs diced (skinless boneless)`,
        `½ red onion chopped`,
        `¼ cup cornstarch`,
        `¼ cup avocado oil`,
        `½ tbsp garlic minced`,
        `2 tbsp white granulated sugar`,
        `2 tsp sesame seeds`,
        `2 tbsp Gochujang`,
        `¾ tsp sesame oil`,
        `2 tbsp regular soy sauce not light or dark!`,
        `1 tbsp cornstarch`,
        `1 cup water`,
        `1 tsp sesame seeds`,
        `1 stalk green onion sliced`
      ],
      instructions: `In a small bowl, whisk together your cornstarch slurry ingredients together and set aside.
      In a large mixing bowl add your diced chicken thighs followed by cornstarch and mix until each piece is coated in cornstarch. Tip: Ensure your chicken thighs are a bit wet or moist so the cornstarch can stick. If they’re dry for any reason, rinse the thighs under cold water and strain before dicing.
      Then in a large pan or wok set over medium high heat, add your avocado oil. Once the oil is hot and glistening, carefully lower your coated chicken and fry until golden, crispy brown. About 10 minutes depending on how high your heat is. You may need to adjust your heat.
      Remove the fried chicken and transfer to a plate. Increase the heat to high. With the residual oil in the pan, add onion and fry for 1 minutes until aromatic.
      Next add your remaining sauce ingredients, leaving the soy sauce last to add. Mix well breaking apart the gochujang. Finally add the cornstarch slurry and mix. Reduce and simmer the sauce until thick and glossy.
      Finally add your fried chicken back in and cover in the sauce. Once all the chicken is covered in the sauce, remove and transfer to a serving plate. Garnish with sesame seeds and green onions (optional). Enjoy!`,
      photo: `https://christieathome.com/wp-content/uploads/2021/04/Korean-Gochujang-Chicken-3.jpg`,
      url: `https://christieathome.com/blog/sweet-spicy-gochujang-chicken/`
    },
    {
      name: `Hearth Bread`,
      description: `This recipe appeared on the back of our King Arthur flour bags for years. Many a baker has learned to bake crusty, chewy hearth-style bread using this recipe — how about you? With its directions geared towards the beginning bread baker, this is a wonderful place for a "newbie" to start. Bonus: The recipe makes two big loaves, one to enjoy at home and one to share with a neighbor or friend.`,
      yield: `2 loaves`,
      totalTime: `2 hrs 35 mins`,
      ingredients: [
        `1 (1/4-ounce) packet active dry yeast or 2 1/4 teaspoons instant yeast`,
        `1 tablespoon (14g) granulated sugar`,
        `1 tablespoon (18g) salt`,
        `2 cups (454g) lukewarm water (not over 110°F)`,
        `5 1/2 to 6 cups (660g to 720g) King Arthur Unbleached All-Purpose Flour`,
        `cornmeal or semolina for sprinkling on the pan, optional`
      ],
      instructions: `To mix the dough: Mix all of the ingredients together, using the smaller amount of flour. Mix thoroughly until the dough pulls away from the sides of the bowl, adding more of the flour if necessary. Turn the dough out onto a floured surface to knead. (This may be a little messy, but don't give up!)
      To knead the dough by hand: Fold the far edge of the dough back over on itself towards you. Press into the dough with the heels of your hands and push away. After each push, rotate the dough 90°. Repeat this process in a rhythmic, rocking motion for 5 minutes, sprinkling only enough flour on your kneading surface to prevent sticking. Let the dough rest while you scrape out and grease the mixing bowl. Knead the dough again for 2 to 3 minutes.
      To knead the dough using a stand mixer: Mix all of the ingredients together using your mixer's dough hook. You'll want to reduce the amount of water to 1 3/4 cups, since you won't be using any extra flour on a kneading surface, as you do when kneading by hand. Knead the dough at low-medium speed for about 10 minutes total, until it's smooth and just barely sticking to the bottom and/or sides of the bowl.
      Place the dough in a lightly greased bowl large enough for it to at least double in size. Cover with plastic wrap and place in a warm, draft-free place (your turned-off oven works well) until the dough doubles, about 1 to 2 hours.
      To shape the dough: Gently deflate the dough. Cut it in half and shape into two oval Italian- or longer, thinner French-style loaves. Place the loaves on a baking sheet lined with parchment (if you have it) and generously sprinkled with cornmeal or semolina. The cornmeal or semolina are optional, but give the bottom crust lovely crunch. 
      Let the loaves rise, gently covered in greased plastic wrap, for 45 minutes, until they're noticeably puffy. Toward the end of the rising time, preheat the oven to 425°F.
      To bake the bread: Brush or spray the loaves generously with lukewarm water; this step, which helps keep the top crust pliant while baking, will enhance the bread's rise. Lightly slash the tops of the loaves three or more times diagonally. Place the pan on the middle rack of the oven.
      Bake the bread for 35 to 40 minutes, until the crust is golden brown and sounds hollow to the touch. The interior temperature of the bread should register at least 200°F on a digital thermometer.
      Remove the loaves from the oven, take them off the pan, and return them to the oven, placing them right on the rack. Turn the oven off and crack the door open several inches. Let the loaves cool in the cooling oven; this will make them extra-crusty.
      Store completely cool bread in a paper bag at room temperature for a couple of days. For longer storage, wrap well and freeze.`,
      photo: `https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/6001-3-large.jpg?itok=vlsMBK5x`,
      url: `https://www.kingarthurbaking.com/recipes/hearth-bread-recipe`,
      notes: `Can you mix and knead this dough using a bread machine? Yes, of course. Place all of the ingredients into the bucket of your machine, set it to the dough cycle, and let the machine complete its cycle. Shape, let rise, and bake bread as directed in the recipe above.
      As a result of reader feedback, we've omitted the instructions from the original recipe for baking the bread by starting it in a cold oven. Not all ovens preheat the same way, and baking in a preheating oven may cause bread to burn. For those of you who've been making this recipe successfully starting in a cold oven, here are the directions you'd been using, starting with slashing the risen loaves: "Lightly slash the tops of the loaves three or more times diagonally and brush them with cold water. Place the pan on the middle rack of a cold oven with a roasting filled about 1" deep with boiling water on the oven bottom. Set the oven temperature to 450°F, and turn on the oven. Bake the bread for 35 to 45 minutes, until the crust is golden brown and sounds hollow to the touch. Its interior temperature should register at least 190°F on a digital thermometer."`
    }
  ]
  await Recipe.insertMany(recipes)
  console.log('Added some recipes!')
}

const run = async () => {
  await main()
  db.close()
}

run()

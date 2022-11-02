module.exports = (app) => {
    const recipes = require('../controllers/recipe.controllers.js');

    //Create a new recipe
    app.post('/recipe/index', recipes.create);

    //Retrieve all recipe
    app.get('/recipe/index', recipes.findAll);

    //Retrieve a single recipe by Pk
    app.get('/recipe/:recipeId', recipes.findByPk);
     
    //Update a recipe with Id
    app.put('/recipe/:recipeId', recipes.update);

    //Delete a recipe with Id
    app.delete('/recipe/:recipeId', recipes.delete);
}
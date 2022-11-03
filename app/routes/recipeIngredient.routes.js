module.exports = (app) => {
    const recipeIngredient = require('../controllers/recipeIngredient.controllers.js');

    //Create a new recipe
    app.post('/recipeIngredient', recipeIngredient.create);

    //Retrieve all recipe
    app.get('/recipeIngredient', recipeIngredient.findAll);

    //Retrieve a single recipe by Pk
    app.get('/recipeIngredient/:recipeIngredientId', recipeIngredient.findByPk);

    //Update a recipe with Id
    app.put('/recipeIngredient/:recipeIngredientId', recipeIngredient.update);

    //Delete a recipe with Id
    app.delete('/recipeIngredient/:recipeIngredientId', recipeIngredient.delete);
}
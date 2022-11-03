module.exports = (app) => {
    const ingredients = require('../controllers/ingredients.controllers.js');

    //Create a new ustensil
    app.post('/ingredients', ingredients.create);

    //Retrieve all ustensil
    app.get('/ingredients', ingredients.findAll);

    //Retrieve a single ustensil by Pk
    app.get('/ingredients/:ingredientId', ingredients.findByPk);

    //Update a ustensil with Id
    app.put('/ingredients/:ingredientId', ingredients.update);

    //Delete a ustensil with Id
    app.delete('/ingredients/:ingredientId', ingredients.delete);
}
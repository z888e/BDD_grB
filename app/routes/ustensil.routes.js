module.exports = (app) => {
    const ustensil = require('../controllers/ustensil.controllers.js');

    //Create a new ustensil
    app.post('/ustensil', ustensil.create);

    //Retrieve all ustensil
    app.get('/ustensil', ustensil.findAll);

    //Retrieve a single ustensil by Pk
    app.get('/ustensil/:ustensilId', ustensil.findByPk);

    //Update a ustensil with Id
    app.put('/ustensil/:ustensilId', ustensil.update);

    //Delete a ustensil with Id
    app.delete('/ustensil/:ustensilId', ustensil.delete);
}
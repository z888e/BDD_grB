module.exports = (app) => {
    const step = require('../controllers/step.controllers.js');

    //Create a new recipe
    app.post('/step', step.create);

    //Retrieve all recipe
    app.get('/step', step.findAll);

    //Retrieve a single recipe by Pk
    app.get('/step/:stepId', step.findByPk);

    //Update a recipe with Id
    app.put('/step/:stepId', step.update);

    //Delete a recipe with Id
    app.delete('/step/:stepId', step.delete);
}
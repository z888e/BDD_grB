module.exports = (app) => {
    const stepUstensil = require('../controllers/stepUstensil.controllers');
    //Create a new ustensil
    app.post('/stepUstensil', stepUstensil.create);

    //Retrieve all recipe
    app.get('/stepUstensil', stepUstensil.findAll);

    //Retrieve a single recipe by Pk
    app.get('/stepUstensil/:stepUstensilId', stepUstensil.findByPk);
}
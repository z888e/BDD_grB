module.exports = (app) => {
    const stepUstensil = require('../controllers/stepUstensil.controllers.js');
    
    //Retrieve all recipe
    app.get('/stepUstensil', stepUstensil.findAll);

    //Retrieve a single recipe by Pk
    app.get('/stepUstensil/:stepUstensilId', stepUstensil.findByPk);
}
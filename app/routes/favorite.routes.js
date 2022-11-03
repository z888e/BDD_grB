module.exports = (app) => {
    const favorite = require('../controllers/favorite.controllers.js');

    //Retrieve all favorites
    app.get('/favorite', favorite.findAll);

    //Retrieve a single favorite by Pk
    app.get('/favorite/:favoriteId', favorite.findByPk);
}
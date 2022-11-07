module.exports = (app) => {
    const favorite = require('../controllers/favorite.controllers');

    //Create a new favorite
    app.post('/favorite', favorite.create);

    //Retrieve all favorites
    app.get('/favorite', favorite.findAll);

    //Retrieve a single favorite by Pk
    app.get('/favorite/:favoriteId', favorite.findByPk);

    //Delete a favorites with Id
    app.delete('/favorite/:favoriteId', favorite.delete);
}
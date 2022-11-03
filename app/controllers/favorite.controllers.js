//favorite.controller.js
const db = require('../configs/configs.js');

const Favorite = db.favorite;


//FETCH all Favorites 
exports.findAll = (request, response) => {
    Favorite.findAll({
        include: ["recipes", "user"]
    }).then(favorite => {
        response.send(favorite);
    });
};

//Find a Favorites by Id
exports.findByPk = (request, response) => {
    Favorite.findByPk(request.params.ingredientId, {
        include: ["recipes", "user"]
    }).then(favorite => {
        response.send(favorite);
    });
}; 

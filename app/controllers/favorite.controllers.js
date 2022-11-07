//favorite.controller.js
const db = require('../configs/configs');

const Favorite = db.favorite;

exports.create = (request, response) => {
    Favorite.create({
        userId: request.body.userId,
        recipeId: request.body.recipeId
    }).then(favorite => {
        response.send(favorite);
    });
};

//FETCH all Favorites 
exports.findAll = (request, response) => {
    Favorite.findAll({
        include: ["user", "recipe"]
    }).then(favorite => {
        response.send(favorite);
    });
};

//Find a Favorites by Id
exports.findByPk = (request, response) => {
    Favorite.findByPk(request.params.favoriteId, {
        include: [ "user", "recipe"]
    }).then(favorite => {
        response.send(favorite);
    });
}; 

//Deleted a Favorite by Id
exports.delete = (request, response) => {
    const id = request.params.favoriteId;
    Favorite.destroy({
        where: { id: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a favorite with id = ' + id
        });
    });
};
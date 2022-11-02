//recipe.controller.js
const db = require('../configs/configs.js');

const Recipe = db.recipe;

//Post a recipe
exports.create = (request, response) => {
    //Save to MySQL database
    recipe.create({
        content: request.body.content,
        userId: request.body.userId
    }).then(recipe => {
        response.send(recipe);
    });
};

//FETCH all recipes
exports.findAll = (request, response) => {
    recipe.findAll({
        include: ["user"]
    }).then(recipes => {
        response.send(recipes);
    });
};

//Find a recipe by Id
exports.findByPk = (request, response) => {
    recipe.findByPk(request.params.recipeId, {
        include: ["user"]
    }).then(recipe => {
        response.send(recipe);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeId;
    recipe.update({
        content: request.body.content
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            recipe: 'updated successfully a recipe with id = ' + id
        });
    });
};

//Deleted a recipe by Id
exports.delete = (request, response) => {
    const id = request.params.recipeId;
    recipe.destroy({
        where: {
             id: id 
            }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a recipe with id = ' + id
        });
    });
};
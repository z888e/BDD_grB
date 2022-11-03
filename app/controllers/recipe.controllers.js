//recipe.controller.js
const db = require('../configs/configs.js');

const Recipe = db.recipes;

//Post a recipe
exports.create = (request, response) => {
    //Save to MySQL database
    Recipe.create({
        userId: request.body.userId,
        recipeName: request.body.recipeName,
        description: request.body.description,
        image: request.body.image,
        cookingTime: request.body.cookingTime,
        season: request.body.season,
        difficulty: request.body.difficulty,
        budget: request.body.budget,
        category: request.body.category
    }).then(recipe => {
        response.send(recipe);
    });
};

//FETCH all recipes
exports.findAll = (request, response) => {
    Recipe.findAll({
        include: ["user"]
    }).then(recipes => {
        response.send(recipes);
    });
};

//Find a recipe by Id
exports.findByPk = (request, response) => {
    Recipe.findByPk(request.params.recipeId, {
        include: ["user"]
    }).then(recipe => {
        response.send(recipe);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeId;
    Recipe.update({
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
    Recipe.destroy({
        where: {
            id: id 
            }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a recipe with id = ' + id
        });
    });
};
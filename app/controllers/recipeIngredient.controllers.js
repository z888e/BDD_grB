//recipe.controller.js
const db = require('../configs/configs.js');

const RecipeIngredient = db.recipeIngredient;

//Post a recipe
exports.create = (request, response) => {
    //Save to MySQL database
    RecipeIngredient.create({
        recipeId: request.body.recipeId,
        ingredientId: request.body.ingredientId,
        quantity: request.body.quantity,
        unit: request.body.unit
    }).then(recipeIngredient => {
        response.send(recipeIngredient);
    });
};

//FETCH all recipes
exports.findAll = (request, response) => {
    RecipeIngredient.findAll({
        include: ["ingredient", "recipe"]
    }).then(recipes => {
        response.send(recipes);
    });
};

//Find a recipe by Id
exports.findByPk = (request, response) => {
    RecipeIngredient.findByPk(request.params.recipeIngredientId, {
        include: ["ingredient", "recipe"]
    }).then(recipeIngredient => {
        response.send(recipeIngredient);
    });
};

exports.update = (request, response) => {
    const id = request.params.recipeIngredientId;
    RecipeIngredient.update({
        quantity: request.body.quantity,
        unit: request.body.unit
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
    const id = request.params.recipeIngredientId;
    RecipeIngredient.destroy({
        where: {
            id: id 
            }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a recipe with id = ' + id
        });
    });
};
//ustensil.controller.js
const db = require('../configs/configs.js');

const Ingredient = db.ingredient;

//Post Ustensil
exports.create = (request, response) => {
    //Save to MySQL database
    Ingredient.create({
        ingredientName:response.body.ingredientName
    }).then(ingredient => {
        response.send(ingredient);
    });
};

//FETCH all Ustensils
exports.findAll = (request, response) => {
    Ingredient.findAll({
        include: ["recipes"]
    }).then(ingredient => {
        response.send(ingredient);
    });
};

//Find a Ustensil by Id
exports.findByPk = (request, response) => {
    Ingredient.findByPk(request.params.ingredientId, {
        include: ["recipes"]
    }).then(ingredient => {
        response.send(ingredient);
    });
}; 

//Update a Ustensil
exports.update = (request, response) => {
    const id = request.params.ingredientId;
    Ingredient.update({
        ingreidentName:response.body.ingredientName
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            recipe: 'updated successfully an ingredient with id = ' + id
        });
    });
};

//Deleted a Ustensil by Id
exports.delete = (request, response) => {
    const id = request.params.ingredientId;
    Ingredient.destroy({
        where: { id: id }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully an ingredient with id = ' + id
        });
    });
};
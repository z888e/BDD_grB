//stepUtensil.controller.js
const db = require('../configs/configs.js');

const stepUtensil = db.stepUstensil;

exports.create = (request, response) => {
    //Save to MySQL database
    stepUtensil.create({
        recipeId: request.body.recipeId,
        ustensilId: request.body.ustensilId
    }).then(stepUtensil => {
        response.send(stepUtensil);
    });
};

//FETCH all stepUtensil 
exports.findAll = (request, response) => {
    stepUtensil.findAll({
        include: ["recipe", "ustensil"]
    }).then(stepUtensil => {
        response.send(stepUtensil);
    });
};

//Find a stepUtensil by Id
exports.findByPk = (request, response) => {
    stepUtensil.findByPk(request.params.ingredientId, {
        include: ["recipe", "ustensil"]
    }).then(stepUtensil => {
        response.send(stepUtensil);
    });
}; 

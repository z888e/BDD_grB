//stepUtensil.controller.js
const db = require('../configs/configs.js');

const stepUtensil = db.stepUstensil;


//FETCH all stepUtensil 
exports.findAll = (request, response) => {
    stepUtensil.findAll({
        include: ["recipes", "utensil"]
    }).then(stepUtensil => {
        response.send(stepUtensil);
    });
};

//Find a stepUtensil by Id
exports.findByPk = (request, response) => {
    stepUtensil.findByPk(request.params.ingredientId, {
        include: ["recipes", "utensil"]
    }).then(stepUtensil => {
        response.send(stepUtensil);
    });
}; 
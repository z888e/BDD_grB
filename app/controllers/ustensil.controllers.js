//ustensil.controller.js
const db = require('../configs/configs.js');

const Ustensil = db.ustensil;

//Post Ustensil
exports.create = (request, response) => {
    //Save to MySQL database
    Ustensil.create({
        name:request.body.name
    }).then(ustensil => {
        response.send(ustensil);
    });
};

//FETCH all Ustensils
exports.findAll = (request, response) => {
    Ustensil.findAll({
        include: ["recipes"]
    }).then(ustensil => {
        response.send(ustensil);
    });
};

//Find a Ustensil by Id
exports.findByPk = (request, response) => {
    Ustensil.findByPk(request.params.ustensilId, {
        include: ["recipes"]
    }).then(ustensil => {
        response.send(ustensil);
    });
}; 

//Update a Ustensil
exports.update = (request, response) => {
    const id = request.params.ustensilId;
    Ustensil.update({
        name:response.body.name
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            recipe: 'updated successfully a ustensil with id = ' + id
        });
    });
};

//Deleted a Ustensil by Id
exports.delete = (request, response) => {
    const id = request.params.ustensilId;
    Ustensil.destroy({
        where: { id: id }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a ustensil with id = ' + id
        });
    });
};
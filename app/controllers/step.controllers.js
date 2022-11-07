//step.controller.js
const db = require('../configs/configs.js');

const Step = db.step;

//Post Step
exports.create = (request, response) => {
    //Save to MySQL database
    Step.create({
        time: request.body.time,
        description: request.body.description
    }).then(step => {
        response.send(step);
    });
};

//FETCH all Steps
exports.findAll = (request, response) => {
    Step.findAll({
        include: ["recipe"]
    }).then(step => {
        response.send(step);
    });
};

//Find a Step by Id
exports.findByPk = (request, response) => {
    Step.findByPk(request.params.stepId, {
        include: ["recipe"]
    }).then(step => {
        response.send(step);
    });
}; 

//Update a Step
exports.update = (request, response) => {
    const id = request.params.stepId;
    Step.update({
        time: request.body.time,
        description: request.body.description
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            recipe: 'updated successfully a step with id = ' + id
        });
    });
};

//Deleted a Step by Id
exports.delete = (request, response) => {
    const id = request.params.stepId;
    Step.destroy({
        where: { id: id }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a step with id = ' + id
        });
    });
};
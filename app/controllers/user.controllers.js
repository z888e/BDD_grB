//user.controller.js
const db = require('../configs/configs.js');

const User = db.users;

//Post a User
exports.create = (request, response) => {
    //Save to MySQL database
    User.create({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
        image: request.body.image,
        userName: request.body.userName 
    }).then(user => {
        response.send(user);
    });
};

//FETCH all Users
exports.findAll = (request, response) => {
    User.findAll({
        include: ["recipes"]
    }).then(users => {
        response.send(users);
    });
};

//Find a User by Id
exports.findByPk = (request, response) => {
    User.findByPk(request.params.userId, {
        include: ["recipes"]
    }).then(user => {
        response.send(user);
    });
};

exports.update = (request, response) => {
    const id = request.params.userId;
    User.update({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.status(200).send({
            recipe: 'updated successfully a user with id = ' + id
        });
    });
};

//Deleted a User by Id
exports.delete = (request, response) => {
    const id = request.params.userId;
    User.destroy({
        where: { id: id }
    }).then(() => {
        response.status(200).send({
            recipe: 'deleted successfully a user with id = ' + id
        });
    });
};
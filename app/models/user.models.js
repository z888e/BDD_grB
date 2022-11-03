module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',{
        // userId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        userName: {
            type: Sequelize.STRING
        },
    });

    return User;   
}
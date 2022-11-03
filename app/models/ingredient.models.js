module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define('ingredient',{
        // ingredientId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        ingredientName: {
            type: Sequelize.STRING
        }
    });

    return Ingredient;   
}
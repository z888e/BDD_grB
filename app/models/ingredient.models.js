module.exports = (sequelize, Sequelize) => {
    const Ingredient = sequelize.define('ingredient',{
        ingredientName: {
            type: Sequelize.STRING
        }
    });

    return Ingredient;   
}
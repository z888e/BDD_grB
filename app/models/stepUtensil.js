module.exports = (sequelize, Sequelize) => {
    const stepUtensilId = sequelize.define("recipeIngredients", {
        recipeIngredientId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        recipeId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'recipe',
                key: 'recipeId'
            },
        },
        utensilId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'utensil',
                key: 'utensilId'
            }
        }
    });

    return stepUtensilId;
}
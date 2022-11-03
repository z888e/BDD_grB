module.exports = (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define("recipeIngredients", {
        recipeIngredientId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        recipeId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'recipes',
                key: 'recipeId'
            },
        },
        ingredientId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'ingredient',
                key: 'ingredientId'
            },
        },
        unit: {
            type: Sequelize.STRING,
        }
    });

    return RecipeIngredient;
}
module.exports = (sequelize, Sequelize) => {
    const stepUstensilId = sequelize.define("recipeIngredients", {
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
        ustensilId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'ustensil',
                key: 'ustensilId'
            }
        }
    });

    return stepUstensilId;
}
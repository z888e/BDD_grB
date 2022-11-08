module.exports = (sequelize, Sequelize) => {
    const Recipes = sequelize.define("recipe", {
        recipeName: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        cookingTime: {
            type: Sequelize.STRING
        },
        season: {
            type: Sequelize.STRING
        },
        difficulty: {
            type: Sequelize.STRING
        },
        budget: {
            type: Sequelize.INTEGER
        },
        category: {
            type: Sequelize.STRING
        }
    });

return Recipes;
}
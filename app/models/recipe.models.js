module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipes", {
        content: {
            type: Sequelize.STRING
        }
    });

    return Recipe;
}
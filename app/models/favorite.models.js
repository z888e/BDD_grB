module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define("favorite", {
        favoriteId: {
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
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            references: {
                model: 'user',
                key: 'userId'
            }
        }
    });

    return Favorite;
}
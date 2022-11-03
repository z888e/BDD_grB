module.exports = (sequelize, Sequelize) => {
    const Utensil = sequelize.define("utensil", {
        utensilId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return Utensil;
}
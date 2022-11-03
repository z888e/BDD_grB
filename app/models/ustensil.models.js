module.exports = (sequelize, Sequelize) => {
    const Ustensil = sequelize.define("ustensil", {
        // ustensilId: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        name: {
            type: Sequelize.STRING
        }
    });

    return Ustensil;
}
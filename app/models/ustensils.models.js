module.exports = (sequelize, Sequelize) => {
    const Ustensil = sequelize.define("ustensil", {
        name: {
            type: Sequelize.STRING
        }
    });

    return Ustensil;
}
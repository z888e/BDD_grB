module.exports = (sequelize, Sequelize) => {
    const Step = sequelize.define("steps", {
        stepId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          time: {
            type: Sequelize.TIME,
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Step;
}
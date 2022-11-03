//configs
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT
};

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USERNAME, 
    process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
  
});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

const db = {};
//importation des constantes créés au dessus
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/user.models.js')(sequelize, Sequelize);
db.recipes = require('../models/recipe.models.js')(sequelize, Sequelize);
db.step = require('../models/step.models.js')(sequelize, Sequelize);
db.ustensil = require('../models/ustensil.models.js')(sequelize, Sequelize);
db.ingredient = require('../models/ingredient.models.js')(sequelize, Sequelize);

//We use hasMany() to help one User have many recipes.
//And belongsTo() to indicate that one Recipe only belongs to one User. 
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});

module.exports = db;
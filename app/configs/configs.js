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
db.favorite = require('../models/favorite.models.js')(sequelize, Sequelize);
db.recipeIngredient = require('../models/ingredient.models.js')(sequelize, Sequelize);
db.stepUstensil = require('../models/stepUstensil.js')(sequelize, Sequelize);
db.ustensil = require('../models/ustensil.models.js')(sequelize, Sequelize);

//We use hasMany() to help one User have many recipes.
//And belongsTo() to indicate that one Recipe only belongs to one User. 
db.users.hasMany(db.recipes, { as: "recipes" });
db.recipes.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});

//table favorite jonction user and recipe
db.favorite.associate = (models) => {
  db.users.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'userId', as: 'user' });
  db.recipes.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
}
db.users.associate = (models) => {
  db.users.belongsToMany(models.User, { as: 'Favorite', through: models.db.favorite, foreignKey: 'userId'});
}
db.recipes.associate = (models) => {
  db.recipes.belongsToMany(models.Recipe, { as: 'Favorite', through: models.db.favorite, foreignKey: 'recipeId'});
}

//table RecipeIngredient junction Ingredient&Recipe
db.recipeIngredient.associate = (models) => {
  db.ingredient.belongsTo(models.Ingredient, { foreignKey: 'ingredientId', targetKey: 'ingredientId', as: 'ingredient' });
  db.recipes.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
}

db.ingredient.associate = (models) => {
  db.ingredient.belongsToMany(models.User, { as: 'recipeIngredient', through: models.db.favorite, foreignKey: 'ingredientId'});
}

db.recipes.associate = (models) => {
  db.recipes.belongsToMany(models.Recipe, { as: 'recipeIngredient', through: models.db.favorite, foreignKey: 'recipeId'});
}

//table stepUstensil junction ustensil&Recipe

db.stepUstensil.associate = (models) => {
  db.ustensil.belongsTo(models.ustensil, { foreignKey: 'ustensilId', targetKey: 'ustensilId', as: 'ustensil' });
  db.recipes.belongsTo(models.Recipe, { foreignKey: 'recipeId', targetKey: 'recipeId', as: 'recipe' });
}

db.ustensil.associate = (models) => {
  db.ustensil.belongsToMany(models.User, { as: 'recipeUstensil', through: models.db.favorite, foreignKey: 'ustensilId'});
}

db.recipes.associate = (models) => {
  db.recipes.belongsToMany(models.Recipe, { as: 'recipeUstensil', through: models.db.favorite, foreignKey: 'recipeId'});
}

module.exports = db;
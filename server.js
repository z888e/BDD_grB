//server
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = require('./app/configs/configs.js');
db.sequelize.sync({force: true})
.then(() => {
    console.log('Drop and Resync with { force: true }');
});

//api routes
app.get("/", (request, response) => {
    response.json({
        recipe: "Welcome to Our App."
    })
});

require('./app/routes/user.routes')(app);
require('./app/routes/recipe.routes')(app);
require('./app/routes/favorite.routes')(app);
require('./app/routes/step.routes')(app);
require('./app/routes/ingredient.routes')(app);
require('./app/routes/recipeIngredient.routes')(app);
require('./app/routes/ustensil.routes')(app);
require('./app/routes/stepUstensil.routes')(app);

//set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



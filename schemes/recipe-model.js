const db = require("../data/db-config")

module.exports = {
getRecipes,
getShoppingList,
getInstructions

};

//GET (FIND)
function getRecipes() {
    //select * from users
    return db.select("*").from("schemes");
}

//GET (FIND BY ID)

//POST (CREATE)

////EDIT/UPDATE - THINK ITS WRONG!

//Delete - THINK ITS WRONG!
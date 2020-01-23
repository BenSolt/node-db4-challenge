const db = require("../data/db-config")

module.exports = {
getRecipes,
getShoppingList,
getInstructions

};

//GET (FIND)
function getRecipes() {
    //select * from users
    return db.select("*").from("recipes");
}

//GET RECIPE LIST (FIND BY ID)
function getShoppingList() {
    return db.select("*").from("recipes");
}

//GET RECIPE Instructions (FIND BY ID)
function getInstructions(){
    return db.select("*").from("recipes");
}

//POST (CREATE)

////EDIT/UPDATE - THINK ITS WRONG!

//Delete - THINK ITS WRONG!
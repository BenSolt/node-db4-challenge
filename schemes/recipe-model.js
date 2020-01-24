const db = require("../data/db-config")

module.exports = {
getRecipes,
getShoppingList,
getInstructions

};

//GET (FIND)
function getRecipes() {
    //select * from users
    return db("recipes")
};

//GET RECIPE LIST (FIND BY ID)
function getShoppingList(id) {
    return db("ingredients")
    .join("recipes", "ingredients.id","instructions.instructions.id")
    .select('ingredients.id', 'ingredient.ingredient_name', 'ingredient.ingredient_number',
    'ingredient.quantity' )
    .where('recipes.id',id)
}




//GET RECIPE Instructions (FIND BY ID)
function getInstructions(id){
    return db("instructions")
    .select('instructions.directions')
    .where('recipes.id',id)
    .orderBy('instructions.step_number')
}

//POST (CREATE)

////EDIT/UPDATE - THINK ITS WRONG!

//Delete - THINK ITS WRONG!
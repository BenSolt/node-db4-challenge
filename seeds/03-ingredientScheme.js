exports.seed = function(knex) {
    return knex("ingredients").insert([
        //Toast 1
        { ingredient_name:"bread slice"},
        
        { ingredient_name:"bread slice"},
        
        { ingredient_name: "butter"},
        { ingredient_name: "jam"},

        //Cheese and crackers 2

        { ingredient_name: "cracker"},
        {ingredient_name: "cheese"},

            // PB and J 3

        { ingredient_name: "peanut butter"},


    ]);
};


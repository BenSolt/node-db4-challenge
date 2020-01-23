exports.seed = function(knex) {
    return knex("ingredients").insert([
        //Toast
        {
            recipe_id: 1,
            ingredient_number: 1,
            ingredient_name:"bread slice",
            quantity: 1
        },
        {
            recipe_id: 1,
            ingredient_number: 2,
            ingredient_name: "butter",
            quantity: 1,
        },

        {
            recipe_id: 1,
            ingredient_number: 3,
            ingredient_name: "jam",
            quantity: 1,
        },
        //Cheese and crackers
        {
            recipe_id: 2,
            ingredient_number: 1,
            ingredient_name: "cracker",
            quantity: 1,
        },

        {
            recipe_id: 2,
            ingredient_number: 2,
            ingredient_name: "cheese",
            quantity: 1,
        },

            // PB and J
        {
            recipe_id: 3,
            ingredient_number: 1,
            ingredient_name: "bread slice",
            quantity: 2,
        },

        {
            recipe_id: 3,
            ingredient_number: 2,
            ingredient_name: "peanut butter",
            quantity: 2,
        },

        {
            recipe_id: 3,
            ingredient_number: 3,
            ingredient_name: "Jam",
            quantity: 2,
        }

    ]);
};


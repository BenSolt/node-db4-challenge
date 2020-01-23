exports.seed = function(knex) {
    return knex("instructions").insert([
        //Toast
        {
            recipe_id: 1,
            step_number: 1,
            directions: "put bread in toaster, cook 2 min",
        },

        {   
            recipe_id: 1, 
            step_number: 2, 
            directions: "take out toaster, add butter and jam."
         },

         //Cheese and crackeres
        {
            recipe_id: 2,
            step_number: 1,
            directions: "get crackers",
        },
        {
            recipe_id: 2,
            step_number: 2,
            directions: "cut cheese",
        },

        {
            recipe_id: 2,
            step_number: 3,
            directions: "put cheese on cracker. EAT!",
        },
       
        // PB and J
        {
            recipe_id: 3,
            step_number: 1,
            directions: "put peanut butter on  slice of bread",
        },
     
        {
            recipe_id: 3,
            step_number: 2,
            directions: "put jam on slice of bread",
        },

        {
            recipe_id: 3,
            step_number: 3,
            directions: "put bread slices together, EAT!",
        },
    
     
 
    ]);
};

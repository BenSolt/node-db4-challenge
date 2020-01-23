exports.seed = function(knex) {
    return knex("steps").insert([
        //Toast
        {
            recipe_id: 1,
            step_number: 1,
            instructions: "solve prime number theory",
        },

        {   
            recipe_id: 1, 
            step_number: 2, 
            instructions: "crack cyber security"
         },

         //Cheese and crackeres
        {
            recipe_id: 2,
            step_number: 1,
            instructions: "A",
        },
        {
            recipe_id: 2,
            step_number: 2,
            instructions: "B",
        },
       
        // PB and J
        {
            recipe_id: 3,
            step_number: 1,
            instructions: "break",
        },
     
        {
            recipe_id: 3,
            step_number: 2,
            instructions: "smash it",
        },
    
     
 
    ]);
};

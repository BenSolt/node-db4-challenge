
exports.seed = function(knex) {
    return knex('recipes').insert([
      {recipe_name: 'Toast'},
      {recipe_name: 'crackers and cheese'},
      {recipe_name: 'PB and J'},
     
    ]);
  };
  
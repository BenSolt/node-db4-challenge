
exports.seed = function(knex) {
    return knex('schemes').insert([
      {recipe_name: 'Toast'},
      {recipe_name: 's'},
      {recipe_name: 'PB and J'},
     
    ]);
  };
  

exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.integer('ingredient_number')
          .unsigned()
          .notNullable();
        tbl.text('ingredient_name')
          .notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        })

        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('instruction_number')
              .unsigned()
              .notNullable();
            tbl.text('instructions_name')
              .notNullable();
            tbl.integer('recipe_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
            });
        

    };

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions');
    
};

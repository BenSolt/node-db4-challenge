
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
        tbl.integer("quantity")
          .notNullable()
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
            tbl.integer('step_number')
              .unsigned()
              .notNullable();
            tbl.text('directions')
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
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    
    
};

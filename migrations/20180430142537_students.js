
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', table => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('image')//////!!!!!!!!!!!!!!!!
    table.string('bio')
    table.string('employer')
    table.string('position')
    table.integer('cohort')
  })
};

exports.down = function(knex, Promise) {
  
};

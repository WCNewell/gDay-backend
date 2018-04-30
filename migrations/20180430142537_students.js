
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', table => {
    table.increments('id')
    table.varchar('name')
    table.varchar('email')
    table.text('image')//////!!!!!!!!!!!!!!!!
    table.varchar('bio')
    table.varchar('employer')
    table.varchar('title')
    table.varchar('password')
    table.string('cohort')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExits('student')
};

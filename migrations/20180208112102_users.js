
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments();
    table.text('username').unique();
    table.text('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

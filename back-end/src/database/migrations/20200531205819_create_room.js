exports.up = function (knex) {
  return knex.schema.createTable("room", function (table) {
    table.increments();
    table.string("ideal_temperature").notNullable();
    table.string("temperature").notNullable();
    table.string("name").notNullable();
    table.string("equipment").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("room");
};

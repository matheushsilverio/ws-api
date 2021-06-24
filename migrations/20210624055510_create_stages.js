const tableName = "Stages";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_tournament").unsigned();
    table.foreign("id_tournament").references("id").inTable("tournaments");
    table.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

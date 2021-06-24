const tableName = "References_stage";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_stage").unsigned();
    table.foreign("id_stage").references("id").inTable("Stages");
    table.dateTime("start_date").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

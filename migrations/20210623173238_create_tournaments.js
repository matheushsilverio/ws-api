const tableName = "Tournaments";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.string("name").notNull();
    table.text("about");
    table.text("rules");
    table.dateTime("start_date").notNull();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

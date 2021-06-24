const tableName = "Registrations";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_tournament").unsigned();
    table.integer("id_team").unsigned();
    table.foreign("id_tournament").references("id").inTable("Tournaments");
    table.foreign("id_team").references("id").inTable("Teams");
    table.integer("status").defaultTo(0);
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

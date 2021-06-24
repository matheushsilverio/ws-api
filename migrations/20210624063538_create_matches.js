const tableName = "Matches";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_map").unsigned();
    table.integer("id_team_1").unsigned();
    table.integer("id_team_2").unsigned();
    table.integer("id_stage").unsigned();
    table.integer("id_reference").unsigned();
    table.foreign("id_map").references("id").inTable("Tournaments");
    table.foreign("id_team_1").references("id").inTable("Teams");
    table.foreign("id_team_2").references("id").inTable("Teams");
    table.foreign("id_stage").references("id").inTable("Stages");
    table.foreign("id_reference").references("id").inTable("References_stage");
    table.integer("rounds_team_1");
    table.integer("rounds_team_2");
    table.integer("status").defaultTo(0);
    table.dateTime("completed_at");
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

const tableName = "Standings";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_team").unsigned();
    table.integer("id_stage").unsigned();
    table.foreign("id_stage").references("id").inTable("Stages");
    table.foreign("id_team").references("id").inTable("Teams");
    table.integer("wins").defaultTo(0);
    table.integer("losses").defaultTo(0);
    table.integer("ties").defaultTo(0);
    table.integer("points").defaultTo(0);
    table.integer("disqualified").defaultTo(0);
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

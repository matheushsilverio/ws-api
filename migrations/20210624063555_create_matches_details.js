const tableName = "Matches_details";

exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id").unsigned().primary();
    table.integer("id_team").unsigned();
    table.integer("id_player").unsigned();
    table.integer("id_agent").unsigned();
    table.foreign("id_team").references("id").inTable("Teams");
    table.foreign("id_player").references("id").inTable("Players");
    table.foreign("id_agent").references("id").inTable("Agents");
    table.integer("average_combate_score");
    table.integer("kills");
    table.integer("deaths");
    table.integer("assists");
    table.float("kda");
    table.integer("economy_class");
    table.integer("first_bloods");
    table.integer("spike_plants");
    table.integer("defuses");
    table.integer("mvp").defaultTo(0);
    table.integer("mvp_inverse").defaultTo(0);
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};

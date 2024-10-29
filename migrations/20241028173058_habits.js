/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("habits", (table) => {
    table.increments("id").primary();
    table.string("text").notNullable();
    table.integer("circles").notNullable();
    table.integer("circles_done").notNullable();
    table.integer("circles_undone").notNullable();
    table
      .integer("tracker_id")
      .unsigned()
      .references("id") // Explicitly reference the column without the table name prefix
      .inTable("tracker_titles") // Explicitly specify the table name without relying on default resolution
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("habits");
};

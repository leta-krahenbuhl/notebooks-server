/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("list_titles", (table) => {
    table.increments("id").primary();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.string("title").notNullable();
    table
      .integer("notebook_id")
      .unsigned()
      .references("id") // Explicitly reference the column without the table name prefix
      .inTable("notebooks") // Explicitly specify the table name without relying on default resolution
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(1);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("list_titles");
};

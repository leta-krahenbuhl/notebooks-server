/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("list_items", (table) => {
    table.increments("id").primary();
    table.string("text").notNullable();
    table.boolean("done").notNullable().defaultTo(false);
    table
      .integer("list_id")
      .unsigned()
      .references("id") // Explicitly reference the column without the table name prefix
      .inTable("list_titles") // Explicitly specify the table name without relying on default resolution
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("list_items");
};

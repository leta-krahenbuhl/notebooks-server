/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("notebooks").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("notebooks", (table) => {
        table.increments("id").primary();
        table.timestamp("date").defaultTo(knex.fn.now());
        table.string("title").notNullable();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("notebooks");
};

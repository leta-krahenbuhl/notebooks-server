/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("journals", (table) => {
    table.increments("id").primary();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.string("title").notNullable();
    table
      .integer("notebook_id")
      .unsigned()
      .references("notebooks.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("journals");
};

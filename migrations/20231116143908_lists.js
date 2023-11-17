/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lists", (table) => {
    table.increments("id").primary();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.string("title").notNullable();
    table
      .integer("notebook_id")
      .unsigned()
      .references("notebooks.id")
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
  return knex.schema.dropTable("lists");
};

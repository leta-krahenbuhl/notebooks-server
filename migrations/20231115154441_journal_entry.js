/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("journal_entry", (table) => {
    table.increments("id").primary();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.string("title").notNullable();
    table.string("text").notNullable();
    table
      .integer("notebook_id")
      .unsigned()
      .references("notebooks.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(4);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("journal_entry");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("list_items", (table) => {
    table.increments("id").primary();
    table.string("text").notNullable();
    table.string("done").notNullable();
    table
      .integer("list_id")
      .unsigned()
      .references("lists.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(1);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};

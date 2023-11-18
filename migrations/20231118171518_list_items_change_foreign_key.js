/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table("list_items", (table) => {
    table.dropForeign(["list_id"]);
    table
      .foreign("list_id")
      .references("id")
      .inTable("list_titles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table("list_items", (table) => {
    table.dropForeign(["list_id"]);

    table
      .foreign("list_id")
      .references("id")
      .inTable("lists")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

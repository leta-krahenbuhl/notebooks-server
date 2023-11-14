/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("table_name").del();
  await knex("table_name").insert([
    {
      id: 1,
      date: "14/11/2023, 14:34:20",
      title: "2023",
    },
    {
      id: 2,
      date: "01/10/2022, 14:34:20",
      title: "2022",
    },
    {
      id: 3,
      date: "12/09/2021, 14:34:20",
      title: "2021",
    },
  ]);
};

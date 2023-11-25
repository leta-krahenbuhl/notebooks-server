/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("notebooks").del();
  await knex("notebooks").insert([
    {
      id: 1,
      date: "2023-11-15 17:50:11",
      title: "To Do",
    },
    {
      id: 2,
      date: "2022-11-15 17:50:10",
      title: "Gift Ideas",
    },
    {
      id: 3,
      date: "2021-11-15 17:50:10",
      title: "Books to read",
    },
    {
      id: 4,
      date: "2020-11-15 17:50:10",
      title: "Random lists",
    },
    {
      id: 5,
      date: "2019-11-15 17:50:10",
      title: "2023",
    },
  ]);
};

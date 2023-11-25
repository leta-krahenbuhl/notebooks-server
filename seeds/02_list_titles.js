/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("list_titles").del();
  await knex("list_titles").insert([
    {
      id: 1,
      date: "2023-11-15 17:50:11",
      title: "Urgent",
      notebook_id: 1,
    },
    {
      id: 2,
      date: "2022-11-15 17:50:10",
      title: "Boat",
      notebook_id: 1,
    },
    {
      id: 3,
      date: "2021-11-15 17:50:10",
      title: "When I have time",
      notebook_id: 1,
    },
    {
      id: 4,
      date: "2020-11-15 17:50:10",
      title: "Dad",
      notebook_id: 2,
    },
    {
      id: 5,
      date: "2019-11-15 17:50:10",
      title: "Natalie",
      notebook_id: 2,
    },
    {
      id: 6,
      date: "2018-11-15 17:50:10",
      title: "Kayla",
      notebook_id: 2,
    },
    {
      id: 8,
      date: "2016-11-15 17:50:10",
      title: "A terrible kindness",
      notebook_id: 3,
    },
    {
      id: 9,
      date: "2015-11-15 17:50:10",
      title: "All the light we cannot see",
      notebook_id: 3,
    },
    {
      id: 10,
      date: "2014-11-15 17:50:10",
      title: "Small pleasures",
      notebook_id: 3,
    },
    {
      id: 11,
      date: "2013-11-15 17:50:10",
      title: "Milkman",
      notebook_id: 3,
    },
    {
      id: 12,
      date: "2012-11-15 17:50:10",
      title: "Tasdf",
      notebook_id: 4,
    },
    {
      id: 13,
      date: "2011-11-15 17:50:10",
      title: "Asdfsdff",
      notebook_id: 4,
    },
    {
      id: 14,
      date: "2023-10-15 17:50:11",
      title: "Madfasdfadf",
      notebook_id: 4,
    },
    {
      id: 15,
      date: "2022-09-15 17:50:10",
      title: "Tadsfdfasdfadf",
      notebook_id: 4,
    },
    {
      id: 16,
      date: "2021-08-15 17:50:10",
      title: "Stuffs",
      notebook_id: 4,
    },
  ]);
};

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

//-------------------------------------------------------

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
      title: "Shopping",
      notebook_id: 1,
    },
    {
      id: 2,
      date: "2022-11-15 17:50:10",
      title: "To Do Boat",
      notebook_id: 1,
    },
    {
      id: 3,
      date: "2021-11-15 17:50:10",
      title: "To Do If Time",
      notebook_id: 3,
    },
    {
      id: 4,
      date: "2020-11-15 17:50:10",
      title: "Hobby Ideas",
      notebook_id: 5,
    },
    {
      id: 5,
      date: "2019-11-15 17:50:10",
      title: "To Do Home",
      notebook_id: 6,
    },
    {
      id: 6,
      date: "2018-11-15 17:50:10",
      title: "To Do Work",
      notebook_id: 7,
    },
    {
      id: 7,
      date: "2017-11-15 17:50:10",
      title: "To Do Ben",
      notebook_id: 8,
    },
    {
      id: 8,
      date: "2016-11-15 17:50:10",
      title: "Gift Ideas Sarah",
      notebook_id: 9,
    },
    {
      id: 9,
      date: "2015-11-15 17:50:10",
      title: "To Do",
      notebook_id: 10,
    },
    {
      id: 10,
      date: "2014-11-15 17:50:10",
      title: "To Do URGENT",
      notebook_id: 11,
    },
    {
      id: 11,
      date: "2013-11-15 17:50:10",
      title: "To Do",
      notebook_id: 12,
    },
    {
      id: 12,
      date: "2012-11-15 17:50:10",
      title: "To Do",
      notebook_id: 13,
    },
    {
      id: 13,
      date: "2011-11-15 17:50:10",
      title: "Remember",
      notebook_id: 1,
    },
    {
      id: 14,
      date: "2023-10-15 17:50:11",
      title: "My favourite list",
      notebook_id: 2,
    },
    {
      id: 15,
      date: "2022-09-15 17:50:10",
      title: "To Do",
      notebook_id: 3,
    },
    {
      id: 16,
      date: "2021-08-15 17:50:10",
      title: "To Do",
      notebook_id: 4,
    },
    {
      id: 17,
      date: "2020-07-15 17:50:10",
      title: "To Do",
      notebook_id: 5,
    },
    {
      id: 18,
      date: "2019-07-15 17:50:10",
      title: "To Do",
      notebook_id: 6,
    },
    {
      id: 19,
      date: "2018-06-15 17:50:10",
      title: "To Do",
      notebook_id: 7,
    },
    {
      id: 20,
      date: "2017-06-15 17:50:10",
      title: "To Do",
      notebook_id: 8,
    },
    {
      id: 21,
      date: "2016-04-15 17:50:10",
      title: "To Do",
      notebook_id: 9,
    },
    {
      id: 22,
      date: "2015-08-15 17:50:10",
      title: "2015",
      notebook_id: 10,
    },
    {
      id: 23,
      date: "2014-01-15 17:50:10",
      title: "To Do",
      notebook_id: 11,
    },
    {
      id: 24,
      date: "2013-01-15 17:50:10",
      title: "To Do",
      notebook_id: 12,
    },
    {
      id: 25,
      date: "2012-02-15 17:50:10",
      title: "To Do",
      notebook_id: 13,
    },
    {
      id: 26,
      date: "2011-04-15 17:50:10",
      title: "To Do",
      notebook_id: 1,
    },
    {
      id: 27,
      date: "2023-03-15 17:50:11",
      title: "To Do",
      notebook_id: 2,
    },
    {
      id: 28,
      date: "2022-04-15 17:50:10",
      title: "To Do",
      notebook_id: 3,
    },
    {
      id: 29,
      date: "2021-05-15 17:50:10",
      title: "To Do",
      notebook_id: 4,
    },
    {
      id: 30,
      date: "2020-05-15 17:50:10",
      title: "To Do",
      notebook_id: 5,
    },
    {
      id: 31,
      date: "2019-06-15 17:50:10",
      title: "To Do",
      notebook_id: 6,
    },
    {
      id: 32,
      date: "2018-10-15 17:50:10",
      title: "To Do",
      notebook_id: 7,
    },
    {
      id: 33,
      date: "2017-10-15 17:50:10",
      title: "To Do",
      notebook_id: 8,
    },
    {
      id: 34,
      date: "2016-10-15 17:50:10",
      title: "To Do",
      notebook_id: 9,
    },
    {
      id: 35,
      date: "2015-10-15 17:50:10",
      title: "To Do",
      notebook_id: 10,
    },
    {
      id: 36,
      date: "2014-11-15 17:50:10",
      title: "To Do",
      notebook_id: 11,
    },
    {
      id: 37,
      date: "2013-10-15 17:50:10",
      title: "To Do",
      notebook_id: 12,
    },
    {
      id: 38,
      date: "2012-10-15 17:50:10",
      title: "To Do",
      notebook_id: 13,
    },
    {
      id: 39,
      date: "2011-10-15 17:50:10",
      title: "To Do",
      notebook_id: 1,
    },
  ]);
};

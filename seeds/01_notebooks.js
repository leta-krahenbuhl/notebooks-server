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
      title: "2023",
    },
    {
      id: 2,
      date: "2022-11-15 17:50:10",
      title: "2022",
    },
    {
      id: 3,
      date: "2021-11-15 17:50:10",
      title: "2021",
    },
    {
      id: 4,
      date: "2020-11-15 17:50:10",
      title: "2020",
    },
    {
      id: 5,
      date: "2019-11-15 17:50:10",
      title: "2019",
    },
    {
      id: 6,
      date: "2018-11-15 17:50:10",
      title: "2018",
    },
    {
      id: 7,
      date: "2017-11-15 17:50:10",
      title: "2017",
    },
    {
      id: 8,
      date: "2016-11-15 17:50:10",
      title: "2016",
    },
    {
      id: 9,
      date: "2015-11-15 17:50:10",
      title: "2015",
    },
    {
      id: 10,
      date: "2014-11-15 17:50:10",
      title: "2022",
    },
    {
      id: 11,
      date: "2013-11-15 17:50:10",
      title: "2013",
    },
    {
      id: 12,
      date: "2012-11-15 17:50:10",
      title: "2012",
    },
    {
      id: 13,
      date: "2011-11-15 17:50:10",
      title: "2011",
    },
  ]);
};

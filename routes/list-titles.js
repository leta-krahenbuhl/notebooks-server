const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.get("/", async (_req, res) => {
  try {
    const data = await knex("list_titles").select(
      "id",
      "date",
      "title",
      "notebook_id"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving list titles: ${err}`);
  }
});

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newListTitle = {
    title: req.body.title,
    notebook_id: req.body.notebook_id,
  };

  try {
    const result = await knex("list_titles").insert(newListTitle);
    const createdTitle = await knex("list_titles")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdTitle);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new list title: ${error}`,
    });
  }
});

module.exports = router;

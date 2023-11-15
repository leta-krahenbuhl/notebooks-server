const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newNotebook = {
    title: req.body.title,
  };

  // console.log(newNotebook); //works with form

  try {
    const result = await knex("notebooks").insert(newNotebook);
    const createdNotebook = await knex("notebooks")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdNotebook);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new notebook: ${error}`,
    });
  }
});

router.get("/", async (_req, res) => {
  try {
    const data = await knex("notebooks").select("title", "id", "date");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Notebooks: ${err}`);
  }
});

module.exports = router;

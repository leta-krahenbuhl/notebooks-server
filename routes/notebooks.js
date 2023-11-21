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
    res.status(400).send(`Error retrieving notebooks: ${err}`);
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await knex("notebooks").where({ id: req.body.id }).del();

    if (result === 0) {
      return res.status(404).json({
        message: `Notebook with ID ${req.body.id} not found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete notebook: ${error}`,
    });
  }
});

module.exports = router;

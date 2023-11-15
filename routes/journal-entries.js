const express = require("express");
const router = express.Router();
require("dotenv").config();
// const knex = require("knex")(require("../knexfile"));
const knex = require("knex")({ client: "mysql2" });
router.use(express.json());

router.post("/create", async (req, res) => {
  //put back-end form validation here

  const newEntry = {
    title: req.body.title,
    text: req.body.text,
  };

  console.log(newEntry); //works with form

  try {
    const result = await knex("notebooks").insert(newEntry);
    const createdEntry = await knex("notebooks")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdEntry);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new journal entry: ${error}`,
    });
  }
});

module.exports = router;

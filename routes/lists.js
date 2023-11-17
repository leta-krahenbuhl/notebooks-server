const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.post("/create", async (req, res) => {
  //put back-end form validation here

  const newList = {
    text: req.body.text,
  };

  console.log(newList); //works with form

  try {
    const result = await knex("journal_entry").insert(newEntry);
    const createdEntry = await knex("journal_entry")
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
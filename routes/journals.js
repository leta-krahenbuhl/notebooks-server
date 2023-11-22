const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newTitle = {
    title: req.body.title,
    notebook_id: req.body.notebookId,
  };

  try {
    const result = await knex("journals").insert(newTitle);
    const createdTitle = await knex("journals")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdTitle);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new journal: ${error}`,
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
router.use(express.json()); // do I need this?

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newListItem = {
    text: req.body.text,
  };

  try {
    const result = await knex("list_items").insert(newListItem);
    const createdItem = await knex("list_items")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdItem);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new list item: ${error}`,
    });
  }
});

module.exports = router;

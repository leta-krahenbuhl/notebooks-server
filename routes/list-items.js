const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
router.use(express.json()); // do I need this?

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newListItem = {
    text: req.body.text,
    list_id: req.body.list_id,
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

router.get("/", async (_req, res) => {
  try {
    const data = await knex("list_items").select(
      "id",
      "text",
      "done",
      "list_id"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving list items: ${err}`);
  }
});

router.put("/done", async (req, res) => {
  try {
    const item = await knex("list_items").where({
      id: req.body.id,
    });

    const updateDone = {
      done: req.body.done,
    };

    const result = await knex("list_items")
      .where({ id: req.body.id })
      .update(updateDone);

    const response = await knex("list_items")
      .select("id", "text", "done", "list_id")
      .where({ id: req.body.id });
    res.status(200).json(response);
  } catch {
    res.status(500).send(`Unable to edit inventory item: ${error}`);
  }
});

router.put("/", async (req, res) => {
  try {
    const item = await knex("list_items").where({
      id: req.body.id,
    });

    const updateItemText = {
      text: req.body.text,
    };

    const result = await knex("list_items")
      .where({ id: req.body.id })
      .update(updateItemText);

    const response = await knex("list_items")
      .select("id", "text", "done", "list_id")
      .where({ id: req.body.id });
    res.status(200).json(response);
  } catch {
    res.status(500).send(`Unable to edit inventory item: ${error}`);
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await knex("list_items")
      .where({ id: req.body.itemId })
      .del();

    if (result === 0) {
      return res.status(404).json({
        message: `List item with ID ${req.body.itemId} not found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete list item: ${error}`,
    });
  }
});

module.exports = router;

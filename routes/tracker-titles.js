const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.get("/", async (_req, res) => {
  try {
    const data = await knex("tracker_titles").select(
      "id",
      "date",
      "title",
      "notebook_id"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving tracker titles: ${err}`);
  }
});

router.post("/", async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: "No tracker title provided. Did you select a date?",
    });
  }

  if (!req.body.notebook_id) {
    return res.status(400).json({
      message: "No notebook_id provided.",
    });
  }

  const { title, notebook_id } = req.body;

  //   console.log("title: ", title);

  try {
    // Check if a tracker title with the same title and notebook_id already exists
    const existingTracker = await knex("tracker_titles")
      .where({ title, notebook_id })
      .first();

    if (existingTracker) {
      // If an existing tracker is found, send a 400 error response with a message
      return res.status(400).json({
        message:
          "You already have a habit tracker for that week. Please edit the existing one or choose a different week.",
      });
    }

    // If no tracker with the same title exists, create a new one
    const result = await knex("tracker_titles").insert({ title, notebook_id });
    const createdTitle = await knex("tracker_titles")
      .where({ id: result[0] })
      .first();

    res.status(201).send(createdTitle);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new tracker title: ${error}`,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await knex("tracker_titles")
      .where({ id: req.body.trackerId })
      .del();

    if (result === 0) {
      return res.status(404).json({
        message: `Tracker with ID ${req.body.trackerId} not found`,
      });
    }

    // TODO: Add logic to delete habits associated with habit tracker too!

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete tracker: ${error}`,
    });
  }
});

router.put("/", async (req, res) => {
  if (!req.body.title) {
    return res.status(404).send("Please add a title.");
  }

  try {
    const updateTitle = {
      title: req.body.title,
    };

    const result = await knex("tracker_titles")
      .where({ id: req.body.id })
      .update(updateTitle);

    if (result === 0) {
      return res.status(404).json({
        message: `Tracker with ID ${req.body.id} not found`,
      });
    }

    const response = await knex("tracker_titles")
      .select("id", "date", "title", "notebook_id")
      .where({ id: req.body.id })
      .first(); // Use .first() to return a single object instead of an array

    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(`Unable to edit tracker title: ${error.message}`);
  }
});

module.exports = router;

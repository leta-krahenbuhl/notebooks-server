const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
router.use(express.json());

router.post("/", async (req, res) => {
  //   console.log("here!"); // works

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

  //   console.log("req.body.title:", req.body.title);  // works
  //   console.log("req.body.notebook_id:", req.body.notebook_id);  // works

  const newTrackerTitle = {
    title: req.body.title,
    notebook_id: req.body.notebook_id,
  };

  try {
    const result = await knex("tracker_titles").insert(newTrackerTitle);
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

module.exports = router;

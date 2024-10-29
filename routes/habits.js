const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
router.use(express.json()); // TODO: do I need this?

router.post("/", async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({
      message: "Please make sure text field is filled out.",
    });
  }

  if (!req.body.tracker_id) {
    return res.status(400).json({
      message: `No tracker_id provided.`,
    });
  }

  const newHabit = {
    text: req.body.text,
    tracker_id: req.body.tracker_id,
    circles: req.body.circles,
    circles_done: 0,
    circles_undone: req.body.circles,
  };

  try {
    const result = await knex("habits").insert(newHabit);
    const createdHabit = await knex("habits").where({ id: result[0] }).first();
    res.status(201).send(createdHabit);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new habit: ${error}`,
    });
  }
});

router.get("/", async (_req, res) => {
  try {
    const data = await knex("habits").select(
      "id",
      "text",
      "circles",
      "circles_done",
      "circles_undone",
      "tracker_id"
    );
    console.log("data: ", data);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving habits: ${err}`);
  }
});

module.exports = router;

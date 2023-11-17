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

router.route("/:notebook-id").get(async (req, res) => {
  try {
    const entriesOfThatNotebook = await knex("entries")
      .where({
        notebook_id: req.params.id,
        //need to set up foreign key notebooke_id for entries...
        // code below not looked at yet, just copied
      })
      .first();
    if (singleDetail.length === 0) {
      return res.status(404).json({
        message: `Notebook with ID ${req.params.id} not found`,
      });
    }

    res.status(200).send(singleDetail);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve for single detail with ID ${req.params.id}`,
    });
  }
});

module.exports = router;

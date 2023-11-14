const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

router.post("/", async (req, res) => {
  //put backend form validation here
  //   const newJournalEntry = {};
});

module.exports = router;

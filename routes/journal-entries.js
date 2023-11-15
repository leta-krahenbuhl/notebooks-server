const express = require("express");
const router = express.Router();
require("dotenv").config();
const knex = require("knex")(require("../knexfile"));

router.post("/", async (req, res) => {
  //put back-end form validation here

  const newEntry = {
    title: req.body.title,
    text: req.body.text,
  };

  console.log(newWarehouse);

  try {
    const result = await knex("warehouses").insert(newWarehouse);
    const createdWarehouse = await knex("warehouses")
      .where({ id: result[0] })
      .first();
    res.status(201).send(createdWarehouse);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new warehouse: ${error}`,
    });
  }
});

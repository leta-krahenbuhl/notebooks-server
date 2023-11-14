const express = require("express");
const app = express();
const journalEntryRoutes = require("./routes/journal-entries.js");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT; //|| 8080;

app.use(express.json());
app.use(cors());

// app.use("/api/journal-entries", journalEntryRoutes);

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the notebooks API!</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

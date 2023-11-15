const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const journalEntryRoutes = require("./routes/journal-entries");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the API!</h1>");
});

app.use("/journal-entries", journalEntryRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

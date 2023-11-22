const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const journalEntryRoutes = require("./routes/journal-entries");
const notebooksRoutes = require("./routes/notebooks");
const ListTitleRoutes = require("./routes/list-titles");
const ListItemRoutes = require("./routes/list-items");
const journalsRoutes = require("./routes/journals");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the API!</h1>");
});

app.use("/api/journals", journalsRoutes);
app.use("/api/journal-entries", journalEntryRoutes);
app.use("/api/notebooks", notebooksRoutes);
app.use("/api/list-titles", ListTitleRoutes);
app.use("/api/list-items", ListItemRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

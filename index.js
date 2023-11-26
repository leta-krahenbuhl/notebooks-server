const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const notebooksRoutes = require("./routes/notebooks");
const ListTitleRoutes = require("./routes/list-titles");
const ListItemRoutes = require("./routes/list-items");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the notebooks API!</h1>");
});

app.use("/api/notebooks", notebooksRoutes);
app.use("/api/list-titles", ListTitleRoutes);
app.use("/api/list-items", ListItemRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the API!</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

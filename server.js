const express = require("express");
const app = express();
const path = require("path");

// const server = app.createServer();
app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get('/', (req, res) => {
  res.send("<h1>Express Server</h3>");
});

app.listen(3000, () => {
  console.log("Server started!");
});

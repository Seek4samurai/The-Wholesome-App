const express = require("express");
const hbs = require('express-handlebars');
const path = require("path");
const app = express();

// const server = app.createServer();
app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// view engine
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
  extname: "hbs",
  defaultView: "default",
  layoutsDir: path.join(__dirname, "views"),
  partialsDir: path.join(__dirname, "views/partials")
}));

// Calling routes
app.use('/', require('./server/router/router'));

app.listen(3000, () => {
  console.log("Server started!");
});

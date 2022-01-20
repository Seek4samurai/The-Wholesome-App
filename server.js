const express = require("express");
const hbs = require('express-handlebars');
const { connect } = require("http2");
const path = require("path");
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: '.env' })

// const server = app.createServer();
app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// database connection
require('./server/database/database')();

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

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
});

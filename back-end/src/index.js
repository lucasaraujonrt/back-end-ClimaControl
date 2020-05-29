const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("ClimaControl is running"));

module.exports = app;

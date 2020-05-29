const express = require("express");

const routes = express.Router();

routes.post("/user", (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json({
    equip: "Equipamento1",
    room: "Sala 2",
  });
});

module.exports = routes;

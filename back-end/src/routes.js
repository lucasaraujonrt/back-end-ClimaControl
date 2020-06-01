const express = require("express");
const loginVerify = require("./controllers/loginVerifyController");
const createUserController = require("./controllers/createUserController");
const createRoomController = require("./controllers/createRoomController");

const routes = express.Router();

routes.post("/register", createUserController.create);
routes.post("/newRoom", createRoomController.create);
routes.post("/user/create", loginVerify.index);
routes.get("/getUser", (req, res) => {
  const body = req.body;
  console.log(body);

  return res.json({
    equip: "Equipamento1",
    room: "Sala 3",
    temperatura: "24 graus",
  });
});

module.exports = routes;

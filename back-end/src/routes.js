const express = require("express");
const loginVerify = require("./controllers/loginVerifyController");
const createUserController = require("./controllers/createUserController");
const createRoomController = require("./controllers/createRoomController");

const routes = express.Router();

routes.post("/register", createUserController.create);
routes.post("/Room", createRoomController.create);
routes.post("/user/create", loginVerify.index);
routes.post("/Room/:id", createRoomController.update);

routes.get("/getRoom", createRoomController.index);
routes.delete("/Room/:id", createRoomController.delete);

module.exports = routes;

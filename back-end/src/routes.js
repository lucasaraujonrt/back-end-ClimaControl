const express = require("express");
const loginVerify = require("./controllers/loginVerifyController");
const UserController = require("./controllers/UserController");
const RoomController = require("./controllers/RoomController");

const routes = express.Router();

//User Routes
routes.post("/registerUser", UserController.create);
routes.get("/user", UserController.index);
routes.post("/user/:id", UserController.update);
routes.post("/user/create", loginVerify.index);

//Room Routes
routes.post("/Room", RoomController.create);
routes.get("/getRoom", RoomController.index);
routes.post("/Room/:id", RoomController.update);
routes.delete("/Room/:id", RoomController.delete);

module.exports = routes;

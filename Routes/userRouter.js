const express = require("express");
const route = express.Router();
const userController = require("../Controller/userController");



route.get("/", userController.getUsers);

route.get("/:id", userController.getUsersId);

route.post("/signup", userController.signUp);

route.post("/login", userController.login);

route.post("/", userController.postUsers);

route.put("/:id", userController.putUsers);

route.delete("/:id", userController.deleteUsers);

module.exports = route;

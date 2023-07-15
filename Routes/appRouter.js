const express = require("express");
const route = express.Router();
const appController = require("../Controller/appController.js");

route.get("/", appController.getApp);
route.get("/:id", appController.getAppId);
route.post("/", appController.postApp);
route.put("/:id", appController.putApp);
route.delete("/:id", appController.deleteApp);

module.exports = route;
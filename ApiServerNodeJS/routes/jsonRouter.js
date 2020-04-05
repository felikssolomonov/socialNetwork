const express = require("express");
const jsonController = require("../controllers/jsonController.js");
const jsonRouter = express.Router();
const followRouterJson = express.Router();

jsonRouter.get("/users", jsonController.getUsers);
jsonRouter.get("/profile/:id", jsonController.getProfile);
jsonRouter.use("/follow", followRouterJson);
followRouterJson.get("/:id", jsonController.getFollow);
followRouterJson.post("/:id", jsonController.postFollow);
followRouterJson.delete("/:id", jsonController.deleteFollow);
jsonRouter.get("/create", jsonController.create);
jsonRouter.post("/create/profile", jsonController.postCreate);

module.exports = jsonRouter;

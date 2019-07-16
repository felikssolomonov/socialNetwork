const express = require("express");
const apiController = require("../controllers/apiController.js");
const apiRouter = express.Router();
const followRouterAPI = express.Router();

apiRouter.get("/users", apiController.getUsers);
apiRouter.get("/profile/:id", apiController.getProfile);
apiRouter.use("/follow", followRouterAPI);
followRouterAPI.get("/:id", apiController.getFollow);
followRouterAPI.post("/:id", apiController.postFollow);
followRouterAPI.delete("/:id", apiController.deleteFollow);

module.exports = apiRouter;

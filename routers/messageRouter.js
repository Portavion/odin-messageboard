const { Router } = require("express");
// const userController = require("../controllers/userController.js");
const messageRouter = Router();
const messageController = require("../controllers/messageController.js");

messageRouter.get("/", messageController.messageGet);
messageRouter.get("/new", messageController.newMessageGet);
messageRouter.get(
  "/message/:username/:text/:added",
  messageController.messageDetailGet,
);

messageRouter.post("/new", messageController.messagePost);

module.exports = messageRouter;

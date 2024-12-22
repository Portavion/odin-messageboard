const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const { body, validationResult } = require("express-validator");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const messageRouter = require("./routers/messageRouter.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", messageRouter);
app.get("/new", messageRouter);
app.get("/message/:username/:text/:added", messageRouter);

app.post("/new", messageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message board running on http://localhost:3000`);
});

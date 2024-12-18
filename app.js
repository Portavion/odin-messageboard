const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.get("/message/:user/:text/:added", (req, res) => {
  res.render("message", {
    user: req.params.user,
    text: req.params.text,
    added: req.params.added,
  });
});

app.post("/new", (req, res) => {
  const author = req.body.name;
  const text = req.body.message;
  const added = new Date();
  messages.push({ user: author, text: text, added: added });
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message board running on http://localhost:3000`);
});

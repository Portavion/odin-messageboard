// controllers/newUserController.js
const db = require("../db/pool");

async function messageGet(req, res) {
  const text = "SELECT * FROM messages;";
  const messages = await db.query(text);
  res.render("index", { messages: messages.rows });
}

function newMessageGet(req, res) {
  res.render("form");
}

function messageDetailGet(req, res) {
  res.render("message", {
    username: req.params.username,
    text: req.params.text,
    added: req.params.added,
  });
}

async function messagePost(req, res) {
  const author = req.body.name;
  const text = req.body.message;
  const queryText =
    "INSERT INTO messages (username, text, added) VALUES ($1,$2, NOW()); ";
  await db.query(queryText, [author, text]);
  // messages.push({ user: author, text: text, added: added });
  res.redirect("/");
}

module.exports = { messageGet, newMessageGet, messageDetailGet, messagePost };

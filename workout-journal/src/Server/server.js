const express = require("express");
const path = require("path");
const app = express();

app.use("/assets", express.static(path.join(__dirname)));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../assets")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../views/index.html"));
});

app.post("/register");

app.get("/messages", (req, res) => {
  return res.status(200).json({ word: "ello gov" });
});

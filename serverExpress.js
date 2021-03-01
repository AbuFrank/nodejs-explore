import express from "express";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// calling express gives you back a server instance
const server = express();

// express provides cleaner lines of code and automatically end res
server.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

server.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

server.get("/about-us", (req, res) => {
  res.redirect("./about");
});

server.get("/message", (req, res) => {
  res.send({ message: "Hello Express" });
});

// this is always used, effectively a default
server.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

// server listening is same as http
server.listen(3000);

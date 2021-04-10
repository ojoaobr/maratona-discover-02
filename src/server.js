const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

server.set("view engine", "ejs");

server.set("views", path.join(__dirname, "views"));

const PORTA = 3000;

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(`${PORTA}`, () =>
  console.log("Servidor ouvindo na porta " + `${PORTA}`)
);

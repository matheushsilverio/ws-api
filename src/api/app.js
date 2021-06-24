require("../../config");
const express = require("express");
const cors = require("cors");
const createSocket = require("./io");
const http = require("http");

class App {
  start() {
    const routes = require("./routes");
    const app = express();
    const port = 3000;

    app.use(cors());
    app.options("*", cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);

    const server = app.listen(process.env.PORT || port, () => {
      console.log("Server listening");
      console.log(`\x1b[32mRunning port: ${process.env.PORT || port} \x1b[0m`);
    });

    createSocket(server);
  }
}

module.exports = new App();

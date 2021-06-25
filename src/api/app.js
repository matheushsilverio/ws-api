import "../../config";
import express from "express";
import cors from "cors";
import Logger from "./logger";

export default class App {
  start() {
    Logger.log("web-server", "Starting core configuration");

    const routes = require("./routes");
    const app = express();

    app.use(cors());
    app.options("*", cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);

    Logger.log("web-server", "Core configuration done");
    return app;
  }
}

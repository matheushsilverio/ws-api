import "../../config";
import express from "express";
import cors from "cors";
import Logger from "../helpers/logger";
import Middlewares from "./middlewares/responses";

export default class App {
  start() {
    Logger.log("web-server", "Starting core configuration");

    const routes = require("./routes");
    const app = express();

    app.use(cors());
    app.options("*", cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(Middlewares);
    app.use(routes);

    Logger.log("web-server", "Core configuration done");
    return app;
  }
}

import "../../config";
import express from "express";
import cors from "cors";
import Logger from "../helpers/logger";
import Middlewares from "./middlewares/responses";
import Router from "./routes";

export default class App {
  constructor() {
    this.routes = new Router();
  }

  start() {
    Logger.log("web-server", "Starting core configuration");

    const app = express();

    app.use(cors());
    app.options("*", cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(Middlewares);
    app.use(this.routes.start());

    Logger.log("web-server", "Core configuration done");
    return app;
  }
}

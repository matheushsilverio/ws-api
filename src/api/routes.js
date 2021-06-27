const express = require("express");
import TournamentRouter from "./routes/tournamentRouter";
import StagesRouter from "./routes/stagesRouter";

export default class Router {
  constructor() {
    this.Router = express.Router();
    this.tournaments = new TournamentRouter();
    this.stages = new StagesRouter();
  }

  start() {
    this.Router.use("/tournaments", this.tournaments.getRoutes());
    this.Router.use("/stages", this.stages.getRoutes());

    return this.Router;
  }
}

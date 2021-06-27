const express = require("express");
import TournamentRouter from "./routes/tournamentRouter";
import StagesRouter from "./routes/stagesRouter";
import MacthesRouter from "./routes/matchesRouter";

export default class Router {
  constructor() {
    this.Router = express.Router();
    this.tournaments = new TournamentRouter();
    this.stages = new StagesRouter();
    this.macthes = new MacthesRouter();
  }

  start() {
    this.Router.use("/tournaments", this.tournaments.getRoutes());
    this.Router.use("/stages", this.stages.getRoutes());
    this.Router.use("/matches", this.macthes.getRoutes());

    return this.Router;
  }
}

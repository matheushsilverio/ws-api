import BaseRouter from "./baseRouter";
import TournamentsController from "../controllers/tournamentsController";

export default class TournamentRouter extends BaseRouter {
  constructor(Database, Controller = null) {
    const ControllerDependecie = Controller || TournamentsController;
    super(Database, ControllerDependecie);
  }

  getRoutes() {
    this.router.post("/", this.controller.create);

    return this.router;
  }
}

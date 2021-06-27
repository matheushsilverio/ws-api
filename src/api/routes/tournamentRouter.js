import BaseRouter from "./baseRouter";
import TournamentsController from "../controllers/tournamentsController";

export default class TournamentRouter extends BaseRouter {
  constructor() {
    super(TournamentsController);
  }

  getRoutes() {
    this.router.post("/", this.controller.create);

    return this.router;
  }
}

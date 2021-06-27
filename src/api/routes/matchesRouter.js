import BaseRouter from "./baseRouter";
import MatchesController from "../controllers/matchesController";

export default class MacthesRouter extends BaseRouter {
  constructor() {
    super(MatchesController);
  }

  getRoutes() {
    this.router.put("/:id", this.controller.update);
    this.router.get("/search", this.controller.search);
    return this.router;
  }
}

import BaseRouter from "./baseRouter";
import StagesController from "../controllers/stagesController";

export default class StagesRouter extends BaseRouter {
  constructor() {
    super(StagesController);
  }

  getRoutes() {
    this.router.post("/", this.controller.create);

    return this.router;
  }
}

import BaseRouter from "./baseRouter";
import StagesController from "../controllers/stagesController";

export default class StagesRouter extends BaseRouter {
  constructor(Database, Controller) {
    const ControllerDependecie = Controller || StagesController;
    super(Database, ControllerDependecie);
  }

  getRoutes() {
    this.router.post("/", this.controller.create);

    return this.router;
  }
}

import StagesModel from "../models/stagesModel";

export default class StageServices {
  constructor(Database) {
    this.model = new StagesModel(Database);
  }

  async create(request) {
    const { stage } = request.body;

    if (!stage) {
      throw new Error("400");
    }

    const stageCreated = await this.model.create(stage);
    return stageCreated;
  }
}

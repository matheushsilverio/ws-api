import StagesServices from "../services/stagesServices";

export default class StagesController {
  async create(request, response) {
    try {
      const Services = new StagesServices();
      const stageCreated = await Services.create(request);
      response.successCreated(stageCreated);
    } catch (err) {
      response.error(err.message);
    }
  }
}

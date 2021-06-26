import StagesServices from "../services/stagesServices";

export default class StagesController {
  constructor(Database, Services) {
    const ServicesDependecie = Services || StagesServices;
    this.services = new ServicesDependecie(Database);
  }

  async create(request, response) {
    try {
      const stageCreated = await this.services.create(request);
      response.successCreated(stageCreated);
    } catch (err) {
      console.log(err);
      response.error(err.message);
    }
  }
}

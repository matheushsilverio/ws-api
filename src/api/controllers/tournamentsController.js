import TournamentsServices from "../services/tournamentsServices";

export default class TournamentController {
  constructor(Database, Services) {
    const ServicesDependecie = Services || TournamentsServices;
    this.services = new ServicesDependecie(Database);
  }

  async create(request, response) {
    try {
      const tournamentCreated = await this.services.create(request);
      response.successCreated(tournamentCreated);
    } catch (err) {
      response.error(err.message);
    }
  }
}

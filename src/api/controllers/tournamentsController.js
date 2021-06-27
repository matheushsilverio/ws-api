import TournamentsServices from "../services/tournamentsServices";

export default class TournamentController {
  async create(request, response) {
    try {
      const Services = new TournamentsServices();
      const tournamentCreated = await Services.create(request);
      response.successCreated(tournamentCreated);
    } catch (err) {
      response.error(err.message);
    }
  }
}

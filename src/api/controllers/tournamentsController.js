import Services from "../services/tournamentsServices";

class TournamentController {
  static async create(request, response) {
    try {
      const tournamentCreated = await Services.create(request);
      response.successCreated(tournamentCreated);
    } catch (err) {
      response.error(err.message);
    }
  }
}

export default TournamentController;

import TournamentsModel from "../models/tournamentModel";

export default class TournamentsServices {
  constructor() {
    this.model = new TournamentsModel();
  }
  async create(request) {
    const { tournament } = request.body;

    if (!tournament) {
      throw new Error("400");
    }

    const tournamentCreated = await this.model.create(tournament);
    return tournamentCreated;
  }
}

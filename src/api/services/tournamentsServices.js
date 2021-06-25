import TournamentsModel from "../models/tournamentModel";

export default class TournamentsServices {
  static async create(request) {
    const Model = new TournamentsModel();
    const { tournament } = request.body;

    if (!tournament) {
      throw new Error("404");
    }

    const tournamentCreated = await Model.create(tournament);
    return tournamentCreated;
  }
}

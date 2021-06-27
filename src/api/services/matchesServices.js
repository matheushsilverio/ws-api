import MatchesModel from "../models/matchesModel";

export default class MatchesServices {
  constructor() {
    this.model = new MatchesModel();
  }

  async update(request) {
    const { id } = request.params;
    const match = request.body;

    if (Object.keys(match).length === 0) {
      throw new Error("400");
    }

    const macthUpdated = await this.model.updateById(id, match);
    return macthUpdated;
  }

  async search(request) {
    const { id_stage, id_map, id_reference } = request.query;

    const filters = {};
    if (id_stage) filters.id_stage = id_stage;
    if (id_map) filters.id_map = id_map;
    if (id_reference) filters.id_reference = id_reference;

    const matches = await this.model.search(filters);
    return matches;
  }
}

import MatchesServices from "../services/matchesServices";

export default class MatchesController {
  async update(request, response) {
    try {
      const Services = new MatchesServices();
      await Services.update(request);
      return response.success();
    } catch (err) {
      return response.error(err.message);
    }
  }

  async search(request, response) {
    try {
      const Services = new MatchesServices();
      const match = await Services.search(request);
      return response.success(match);
    } catch (err) {
      console.log(err);
      return response.error(err.message);
    }
  }
}

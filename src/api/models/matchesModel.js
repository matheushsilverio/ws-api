import BaseModel from "@database/baseModel";

export default class StagesModel extends BaseModel {
  constructor() {
    super("matches");
  }

  async search(paramsFilter) {
    return this.database
      .from("matches as a")
      .select(
        "a.*",
        "t1.name as team_1_name",
        "t2.name as team_2_name",
        "m.name as map_name",
        "m.img_gallery as map_link_gallery"
      )
      .join("teams as t1", "t1.id", "=", "a.id_team_1")
      .join("teams as t2", "t2.id", "=", "a.id_team_2")
      .join("maps as m", "m.id", "=", "a.id_map")
      .where(paramsFilter);
  }
}

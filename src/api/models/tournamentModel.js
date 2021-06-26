import BaseModel from "@database/baseModel";

export default class TournamentsModel extends BaseModel {
  constructor(Database) {
    super("tournaments", Database);
  }
}

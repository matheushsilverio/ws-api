import BaseModel from "@database/baseModel";

export default class StagesModel extends BaseModel {
  constructor(Database) {
    super("stages", Database);
  }
}

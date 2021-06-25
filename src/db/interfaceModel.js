import Database from "./database";

export default class InterfaceModel {
  constructor(collection) {
    this.database = Database.createConnection();
    this.collection = () => this.database(collection);
  }

  async get() {
    return await this.collection();
  }

  async getById(id) {
    return await this.collection().where({ id });
  }

  async create(data) {
    const [id] = await this.collection().insert(data);
    return await this.getById(id);
  }

  async createMany(ArrayData) {
    const ids = await this.collection().insert(ArrayData);
    return await this.collection().whereIn("id", ids);
  }

  async deleteById(id) {
    return await this.collection().where({ id }).del();
  }

  async updateById(id, data) {
    return await this.collection().where({ id }).update(data);
  }
}

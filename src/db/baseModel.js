// import Database from "./database";

export default class baseModel {
  constructor(collection, Database) {
    this.database = Database.createConnection();
    this.collection = collection;
  }

  async get() {
    return await this.database(this.collection);
  }

  async getById(id) {
    return await this.database(this.collection).where({ id });
  }

  async create(data) {
    const [id] = await this.database(this.collection).insert(data);
    return await this.getById(id);
  }

  async createMany(ArrayData) {
    const ids = await this.database(this.collection).insert(ArrayData);
    return await this.database(this.collection).whereIn("id", ids);
  }

  async deleteById(id) {
    return await this.database(this.collection).where({ id }).del();
  }

  async updateById(id, data) {
    return await this.database(this.collection).where({ id }).update(data);
  }
}

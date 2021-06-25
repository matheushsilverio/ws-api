import Knex from "knex";

export default class Database {
  static createConnection() {
    return new Knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_BASE,
      },
      pool: { min: 0, max: 7 },
    });
  }
}

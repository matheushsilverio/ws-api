const express = require("express");

export default class baseRouter {
  constructor(Database, Controller) {
    this.controller = new Controller(Database);
    this.router = express.Router();
  }
}

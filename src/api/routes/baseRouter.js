const express = require("express");

export default class baseRouter {
  constructor(Controller) {
    this.controller = new Controller();
    this.router = express.Router();
  }
}

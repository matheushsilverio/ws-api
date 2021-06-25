const routes = require("express").Router();
const logger = require("morgan");

routes.use(
  logger(
    "[debug] :date[web] | :method :url :status - content-length :res[content-length] - :response-time ms"
  )
);

// Tournaments Routes
import TournamentsControler from "./controllers/tournamentsController";
routes.post("/tournaments", TournamentsControler.create);

module.exports = routes;

const routes = require("express").Router();
const logger = require("morgan");

routes.use(
  logger(
    "[debug] :date[web] | :method :url :status - content-length :res[content-length] - :response-time ms"
  )
);

module.exports = routes;

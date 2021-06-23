const routes = require("express").Router();
const logger = require("morgan");

let round = 1;

routes.use(
  logger(
    "[debug] :date[web] | :method :url :status - content-length :res[content-length] - :response-time ms"
  )
);

// routes.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

module.exports = routes;

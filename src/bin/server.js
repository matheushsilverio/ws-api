import App from "../api/app";
import Io from "../socket/io";
import http from "http";
import Logger from "../helpers/logger";
import Database from "../db/database";
class Server {
  static start(database) {
    const port = 3000;
    const app = new App(database);
    const httpServer = http.createServer(app.start());

    httpServer.listen(process.env.PORT || port, () => {
      Logger.log(
        "web-server",
        `Server running! Listening in port: ${process.env.PORT || port}`
      );
    });

    const IoInstance = new Io(httpServer);
    IoInstance.createConnection(httpServer);
  }
}

Server.start(Database);

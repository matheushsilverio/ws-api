import App from "../api/app";
import Io from "../socket/io";
import http from "http";
import Logger from "../helpers/logger";
class Server {
  static start() {
    const port = 3000;
    const app = new App();
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

Server.start();

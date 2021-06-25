import SocketEvents from "./constant/SocketEvents";
import socketIo from "socket.io";
import Matches from "./io-stream/matches";
import Logger from "./logger";

export default class Io {
  constructor(serverInstance) {
    this.io = new socketIo.Server(serverInstance, {
      cors: {
        origin: process.env.APP_URL,
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
  }

  createConnection() {
    Logger.log("io", `Starting socket.io`);
    this.io.on(SocketEvents.CONNECT, (socket) => {
      Logger.log("io", `new connection ${socket.id}`);

      Matches.start(socket);
    });
  }

  close() {
    this.io.close();
  }
}

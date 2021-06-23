const SocketEvents = require("./constant/SocketEvents");

let round = 1;

module.exports = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  io.on(SocketEvents.CONNECT, (socket) => {
    console.log("Socket connected");

    socket.on(SocketEvents.CONNECT, () => {
      console.log("Socket disconnect");
    });

    socket.on(SocketEvents.ROUND_CHANGE, () => {
      round += 1;
      console.log(`round ${round}`);
    });
  });
};

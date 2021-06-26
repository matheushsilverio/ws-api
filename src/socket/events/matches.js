import SocketEvents from "../../../constants";
import { updateMatches } from "../services/macthesServices";

export default class Matches {
  static start(socket) {
    const { id } = socket;
    
    socket.on(SocketEvents.UPDATE_MATCHES, async () => {
      const updated = await updateMatches();
      socket.emit("ok", updated);
    });
  }
}

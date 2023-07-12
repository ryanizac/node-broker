import socketio from "socket.io";
import { Middleware } from "../core/sockets/common";
import { ClientError } from "../core";

export function adaptMiddlewareToSocketIO(
  io: socketio.Server,
  middleware: Middleware,
) {
  io.use(async (socket, nextFunction) => {
    const query = socket.handshake.query as any;
    const disconnect = () => {
      socket.disconnect(true);
    };
    const next = () => {
      nextFunction();
    };
    const emit = (topic: string, data: any) => {
      socket.emit(topic, data);
    };

    try {
      await middleware({ query, disconnect, emit }, next);
    } catch (error) {
      const isPublicError = error instanceof ClientError;
      const message = isPublicError ? error.message : "Unknown error";

      socket.emit("error", { error: message });
    }
  });
}

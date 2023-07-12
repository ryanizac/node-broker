import { ClientError } from "../../errors";
import { CheckAuthorization } from "../../services";
import { Middleware } from "../common";

export const CheckAuthorizationMiddleware: Middleware = async (
  socket,
  next,
) => {
  try {
    const token = socket.query.token;
    await CheckAuthorization({ token });
    next();
  } catch (error) {
    const isPublicError = error instanceof ClientError;
    const message = isPublicError ? error.message : "Unknown error";

    socket.emit("unauthorized", { error: message });
    socket.disconnect();
  }
};

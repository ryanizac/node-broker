import { Socket } from "./socket";

export type Middleware = (
  socket: Socket,
  next: Middleware.NextFunction,
) => void | Promise<void>;

export namespace Middleware {
  export type NextFunction = (error?: string) => void;
}

import { adaptMiddlewareToSocketIO, adaptRouteToExpress } from "./adapters";
import { routes } from "./core";
import { socketMiddlewares } from "./core/sockets";
import { createServer } from "./factories";

async function main() {
  const PORT = process.env.PORT || 3002;
  const server = createServer();

  for (const route of Object.values(routes)) {
    adaptRouteToExpress(server.app, route);
  }

  for (const Middleware of Object.values(socketMiddlewares)) {
    adaptMiddlewareToSocketIO(server.io, Middleware);
  }

  server.start(PORT);
}

main();

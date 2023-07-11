import { adaptRouteToExpress } from "./adapters";
import { routes } from "./core";
import { createServer } from "./factories";

async function main() {
  const PORT = process.env.PORT || 3002;
  const server = createServer();

  for (const route of Object.values(routes)) {
    adaptRouteToExpress(server.app, route);
  }

  server.start(PORT);
}

main();

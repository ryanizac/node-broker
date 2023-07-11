import { createServer } from "./factories";

async function main() {
  const PORT = process.env.PORT || 3002;
  const server = createServer();

  server.start(PORT);
}

main();

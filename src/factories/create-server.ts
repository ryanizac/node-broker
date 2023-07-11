import httpModule from "node:http";
import socketio from "socket.io";
import express from "express";
import cors from "cors";

export function createServer() {
  const app = express();
  const http = httpModule.createServer(app);
  const io = new socketio.Server(http);

  app.use(cors());
  app.use(express.json());

  function start(port: string | number) {
    http.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }

  return { app, http, io, start };
}

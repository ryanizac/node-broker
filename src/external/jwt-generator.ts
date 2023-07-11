import { loadEnv } from "../utils";
import jwt from "jsonwebtoken";

export class JWTGenerator {
  private static readonly SECRET = loadEnv("JWT_SECRET");

  static generate(data: JWTGenerator.Payload): string {
    return jwt.sign(data, this.SECRET);
  }
}

export namespace JWTGenerator {
  export type Payload = {
    id: string;
  };
}

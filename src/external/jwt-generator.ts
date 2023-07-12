import { loadEnv } from "../utils";
import jwt from "jsonwebtoken";

export class JWTGenerator {
  private static readonly SECRET = loadEnv("JWT_SECRET");

  static generate(data: JWTGenerator.Payload): string {
    return jwt.sign(data, this.SECRET);
  }

  static decode(token: string): JWTGenerator.Payload | null {
    try {
      const payload = jwt.verify(token, this.SECRET) as JWTGenerator.Payload;
      return payload;
    } catch (error) {
      return null;
    }
  }

  static check(token: string): boolean {
    return !!this.decode(token);
  }
}

export namespace JWTGenerator {
  export type Payload = {
    id: string;
  };
}

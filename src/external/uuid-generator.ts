import { v4 as uuid } from "uuid";

export class UUIDGenerator {
  static generate() {
    return uuid();
  }
}

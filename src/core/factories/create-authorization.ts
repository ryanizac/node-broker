import { JWTGenerator, UUIDGenerator } from "../../external";
import { Authorization } from "../entities";

export function createAuthorization({ consumerId }: createAuthorization.Args) {
  const id = UUIDGenerator.generate();
  const createAt = new Date();
  const updateAt = createAt;
  const token = JWTGenerator.generate({ id });

  return new Authorization({ id, createAt, updateAt, token, consumerId });
}

export namespace createAuthorization {
  export type Args = {
    consumerId: string;
  };
}

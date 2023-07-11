import { UUIDGenerator } from "../../external";
import { Consumer } from "../entities";

export function createConsumer({ name }: createConsumer.Args) {
  const id = UUIDGenerator.generate();
  const createAt = new Date();
  const updateAt = createAt;

  return new Consumer({ id, createAt, updateAt, name });
}

export namespace createConsumer {
  export type Args = {
    name: string;
  };
}

import { UUIDGenerator } from "../../external";
import { Topic } from "../entities";

export function createTopic({ name }: createTopic.Args) {
  const id = UUIDGenerator.generate();
  const createAt = new Date();
  const updateAt = createAt;

  return new Topic({ id, createAt, updateAt, name });
}

export namespace createTopic {
  export type Args = {
    name: string;
  };
}

import { Topic } from "../entities";
import { ClientError } from "../errors";
import { createTopic } from "../factories";
import { TopicRepository } from "../repositories";
import { ValidateString } from "../validators";

export async function CreateTopic({
  name,
}: CreateTopic.Args): Promise<CreateTopic.Result> {
  ValidateString({ name });

  const exists = await TopicRepository.exists(name);

  if (exists) {
    throw new ClientError(`The topic ${name} already exists`);
  }

  const topic = createTopic({ name });
  await TopicRepository.create(topic.props);

  return {
    topic: topic.toPublic(),
  };
}

export namespace CreateTopic {
  export type Args = {
    name: string;
  };

  export type Result = {
    topic: Topic.Public;
  };
}

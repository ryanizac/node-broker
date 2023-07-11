import { TopicRepository } from "../repositories";

export async function ReadAllTopics(): Promise<ReadAllTopics.Result> {
  const allTopics = await TopicRepository.readAll();
  const topics = allTopics.map(({ name }) => name);

  return { topics };
}

export namespace ReadAllTopics {
  export type Result = {
    topics: string[];
  };
}

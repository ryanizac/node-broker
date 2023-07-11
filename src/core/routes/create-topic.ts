import { CreateTopic } from "../services";
import { Http } from "./common";

export const CreateTopicRoute: Http.Route = {
  path: "/topic",
  method: "post",

  async handle({ body }: Http.Request): Promise<Http.Response> {
    const name = body.name;
    const data = await CreateTopic({ name });

    return { data };
  },
};

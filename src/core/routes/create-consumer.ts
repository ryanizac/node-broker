import { CreateConsumer } from "../services";
import { Http } from "./common";

export const CreateConsumerRoute: Http.Route = {
  path: "/consumer",
  method: "post",

  async handle({ body }: Http.Request): Promise<Http.Response> {
    const name = body.name;
    const data = await CreateConsumer({ name });

    return { data };
  },
};

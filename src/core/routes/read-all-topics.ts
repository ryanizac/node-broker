import { ReadAllTopics } from "../services";
import { Http } from "./common";

export const ReadAllTopicsRoute: Http.Route = {
  path: "/topic",
  method: "get",

  async handle(): Promise<Http.Response> {
    const data = await ReadAllTopics();
    return { data };
  },
};

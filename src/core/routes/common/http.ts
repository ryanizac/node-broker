export namespace Http {
  export type Method = "get" | "post" | "put" | "delete";

  export type Request = {
    body: any;
    params: any;
    query: any;
    headers: any;
  };

  export type Response = {
    data: any;
    code?: number;
  };

  export type HandleFunction = (req: Request) => Promise<Response>;

  export type Route = {
    path: string;
    method: Method;
    handle: HandleFunction;
  };
}

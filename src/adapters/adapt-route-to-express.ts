import { Express } from "express";
import { ClientError } from "../core";
import { Http } from "../core/routes/common";

export function adaptRouteToExpress(app: Express, route: Http.Route) {
  app[route.method](route.path, async (req, res) => {
    try {
      const { data, code = 200 } = await route.handle({
        body: req.body,
        headers: req.headers,
        params: req.params,
        query: req.query,
      });

      res.status(code).json(data);
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.code).json({ error: error.message });
      }

      res.status(500).json({ error: "internal server error" });
    }
  });
}

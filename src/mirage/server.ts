import { createServer } from "miragejs";
import { TRENDING_ARTICLES_RESPONSE } from "./constants";

export default function () {
  createServer({
    routes() {
      this.get("/api/trending-articles", () => TRENDING_ARTICLES_RESPONSE);
    },
  });
}

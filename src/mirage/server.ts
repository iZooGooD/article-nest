import { createServer } from "miragejs";
import { TRENDING_ARTICLES_RESPONSE } from "./constants";

export default function () {
  createServer({
    routes() {
      this.get("/api/trending-articles", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(TRENDING_ARTICLES_RESPONSE);
          }, 2000);
        });
      });
    },
  });
}

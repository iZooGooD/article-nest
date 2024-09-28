import { createServer } from "miragejs";
import {
  TRENDING_ARTICLES_RESPONSE,
  LATEST_ARTICLES_RESPONSE,
  ARTICLE_DETAILS_RESPONSE,
  PROFILE_RESPONSE,
  COMMENTS_RESPONSE,
} from "./constants";

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

      this.get("/api/latest-articles", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(LATEST_ARTICLES_RESPONSE);
          }, 2000);
        });
      });

      this.get("/api/article/:id", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(ARTICLE_DETAILS_RESPONSE);
          }, 0);
        });
      });

      this.get("/api/profile/:username", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(PROFILE_RESPONSE);
          }, 2500);
        });
      });

      this.get("/api/article/:articleId/comments", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(COMMENTS_RESPONSE);
          }, 2000);
        });
      });
    },
  });
}

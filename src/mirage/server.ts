import { createServer } from "miragejs";
import {
  TRENDING_ARTICLES_RESPONSE,
  LATEST_ARTICLES_RESPONSE,
  ARTICLE_DETAILS_RESPONSE,
  ARTICLE_PROFILE_RESPONSE,
  COMMENTS_RESPONSE,
  AUTHOR_ARTICLES_RESPONSE,
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
            resolve(ARTICLE_PROFILE_RESPONSE);
          }, 0);
        });
      });

      this.get("/api/:username/articles", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(AUTHOR_ARTICLES_RESPONSE);
          }, 1000);
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

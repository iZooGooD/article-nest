import { createServer, Response } from "miragejs";
import {
  TRENDING_ARTICLES_RESPONSE,
  LATEST_ARTICLES_RESPONSE,
  ARTICLE_DETAILS_RESPONSE,
  ARTICLE_PROFILE_RESPONSE,
  COMMENTS_RESPONSE,
  AUTHOR_ARTICLES_RESPONSE,
  MY_PROFILE_RESPONSE,
  TAGS_RESPONSE,
  USER_ARTICLES_STATS,
  SEARCH_DATA,
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

      this.get("/api/my-profile", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(MY_PROFILE_RESPONSE);
          }, 0);
        });
      });

      this.get("/api/tags", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(TAGS_RESPONSE);
          }, 0);
        });
      });

      this.get("/api/user/:userId/articles-stats", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(USER_ARTICLES_STATS);
          }, 0);
        });
      });

      this.get("/api/articles/search", (schema, request) => {
        // Extract search params from queryParams
        const { page = 1 } = request.queryParams;

        const currentPage = Number(page);

        const articlesPerPage = 6;

        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;

        const paginatedData = SEARCH_DATA.slice(startIndex, endIndex);

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: paginatedData,
              metadata: {
                pageSize: 6,
                pages: 2,
                count: 6,
              },
            });
          }, 1000);
        });
      });

      this.post("/api/login", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
              user: {
                email: "testuser@articlenest.com",
                username: "jack_1",
                firstName: "Jack",
                lastName: "Miller",
              },
            });
          }, 1500);
        });
      });

      this.post("/api/register", () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              new Response(
                201,
                { "Content-Type": "application/json" },
                { message: "User created" }
              )
            );
          }, 1500);
        });
      });
    },
  });
}

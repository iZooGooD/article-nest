import { ArticleType } from "src/utils/types/article";

export class API {
  static namespace: string = "api";
  static async getTrendingArticles(): Promise<ArticleType[]> {
    try {
      const response = await fetch(`${this.namespace}/trending-articles`);
      const data = await response.json();
      return data.trendingArticles;
    } catch (error) {
      console.error("Error fetching trending articles: ", error.message);
      return [];
    }
  }
}

import { ArticleType, ArticleDetailsType } from "src/utils/types/article";
import { ProfileType } from "src/utils/types/profile";
import { CommentType } from "src/utils/types/comment";
import { PrivateProfileType } from "src/utils/types/profile";

export class API {
  static namespace: string = "/api";

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

  static async getLatestArticles(): Promise<ArticleType[]> {
    try {
      const response = await fetch(`${this.namespace}/latest-articles`);
      const data = await response.json();
      return data.latestArticles;
    } catch (error) {
      console.error("Error fetching latest articles: ", error.message);
      return [];
    }
  }

  static async getArticleDetails(id: string): Promise<ArticleDetailsType> {
    try {
      const response = await fetch(`${this.namespace}/article/${id}`);
      const data = await response.json();
      return data.article;
    } catch (error) {
      console.error("Error fetching article details: ", error.message);
      return {} as ArticleDetailsType;
    }
  }

  static async getProfileDetailsUsingUsername(
    username: string
  ): Promise<ProfileType> {
    try {
      const response = await fetch(`${this.namespace}/profile/${username}`);
      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error("Error fetching profile: ", error.message);
      return {} as ProfileType;
    }
  }

  static async getCommentsForArticle(
    articleId: number
  ): Promise<CommentType[]> {
    try {
      const response = await fetch(
        `${this.namespace}/article/${articleId}/comments`
      );
      const data = await response.json();
      return data.comments;
    } catch (error) {
      console.error("Error fetching comments: ", error.message);
      return [];
    }
  }

  static async getArticlesByAuthor(username: string): Promise<ArticleType[]> {
    try {
      const response = await fetch(`${this.namespace}/${username}/articles`);
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.error("Error fetching articles by author: ", error.message);
      return [];
    }
  }

  static async getMyProfile(): Promise<PrivateProfileType> {
    try {
      const response = await fetch(`${this.namespace}/my-profile`);
      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error("Error fetching my profile: ", error.message);
      return {} as PrivateProfileType;
    }
  }
}

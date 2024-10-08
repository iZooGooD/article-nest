import {
  ArticleType,
  ArticleDetailsType,
  ArticleStatsType,
} from "src/utils/types/article";
import { ProfileType } from "src/utils/types/profile";
import { CommentType } from "src/utils/types/comment";
import { PrivateProfileType } from "src/utils/types/profile";
import { TagType } from "src/utils/types/tags";
import { UserType } from "src/utils/types/user";
import { SignUpForm } from "src/utils/validations/signup";

export class API {
  static namespace: string = "/api";

  static async getTrendingArticles(): Promise<ArticleType[] | undefined> {
    const response = await fetch(`${API.namespace}/trending-articles`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Trending Articles");
    }
    const data = await response.json();
    return data.trendingArticles;
  }

  static async getLatestArticles(): Promise<ArticleType[]> {
    const response = await fetch(`${API.namespace}/latest-articles`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Latest Articles");
    }
    const data = await response.json();
    return data.latestArticles;
  }

  static async getArticleDetails(id: string): Promise<ArticleDetailsType> {
    const response = await fetch(`${API.namespace}/article/${id}`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Article Details");
    }
    const data = await response.json();
    return data.article;
  }

  static async getProfileDetailsUsingUsername(
    username: string
  ): Promise<ProfileType> {
    const response = await fetch(`${API.namespace}/profile/${username}`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Profile Details");
    }
    const data = await response.json();
    return data.profile;
  }

  static async getCommentsForArticle(
    articleId: number
  ): Promise<CommentType[]> {
    const response = await fetch(
      `${API.namespace}/article/${articleId}/comments`
    );
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Comments");
    }
    const data = await response.json();
    return data.comments;
  }

  static async getArticlesByAuthor(username: string): Promise<ArticleType[]> {
    const response = await fetch(`${API.namespace}/${username}/articles`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Articles by Author");
    }
    const data = await response.json();
    return data.articles;
  }

  static async getMyProfile(): Promise<PrivateProfileType> {
    const response = await fetch(`${API.namespace}/my-profile`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching My Profile");
    }
    const data = await response.json();
    return data.profile;
  }

  static async getAllTags(): Promise<TagType[]> {
    const response = await fetch(`${API.namespace}/tags`);
    if (!response.ok) {
      throw new Error("Response was not ok while fetching Tags");
    }
    const data = await response.json();
    return data.tags;
  }

  static async getUserDashboardArticles(
    userId: number
  ): Promise<ArticleStatsType[]> {
    const response = await fetch(
      `${API.namespace}/user/${userId}/articles-stats`
    );
    if (!response.ok) {
      throw new Error(
        "Response was not ok while fetching User Dashboard Articles"
      );
    }
    const data = await response.json();
    return data.articles;
  }

  static async searchArticles(
    page: number,
    keywords?: string,
    sortBy?: string,
    author?: string,
    tags?: string
  ): Promise<{
    data: ArticleType[];
    metadata: { pageSize: number; pages: number; count: number };
  }> {
    const searchParams = new URLSearchParams();

    if (keywords) searchParams.append("keywords", keywords);
    if (sortBy) searchParams.append("sortBy", sortBy);
    if (author) searchParams.append("author", author);
    if (tags) searchParams.append("tags", tags);
    if (page) searchParams.append("page", page.toString());

    const response = await fetch(
      `${API.namespace}/articles/search?${searchParams.toString()}`
    );
    if (!response.ok) {
      throw new Error(
        "Response was not ok while fetching User Dashboard Articles"
      );
    }
    return await response.json();
  }

  static async login(
    username: string,
    password: string
  ): Promise<{ token: string; user: UserType }> {
    const response = await fetch(`${API.namespace}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return {
      token: data.token,
      user: data.user,
    };
  }

  static async refreshToken(token: string): Promise<string> {
    const response = await fetch(`${API.namespace}/refresh-token`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Failed to refresh token");
    }

    const data = await response.json();
    return data.token;
  }

  static async registerUser(userData: SignUpForm): Promise<boolean> {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return response.status === 201 ? true : false;
  }
}

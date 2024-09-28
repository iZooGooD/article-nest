import { ArticleAuthorType } from "../types/article";

export const generateArticleSlug = (
  title: string,
  author: ArticleAuthorType,
  id: number
): string => {
  const username: string = author.username;
  const slug: string = title.toLowerCase().split(" ").join("-");
  return `${username}/${slug}-${id}`;
};

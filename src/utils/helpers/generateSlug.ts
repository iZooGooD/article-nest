export const generateArticleSlug = (
  title: string,
  authorUsername: string,
  id: number
): string => {
  const slug: string = title.toLowerCase().split(" ").join("-");
  return `/${authorUsername}/posts/${slug}-${id}`;
};

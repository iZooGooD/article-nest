/**
 * Adding the postfix 'Type' to the interface name to differentiate between
 * the interface and the class or with the actual Prop.
 */

export interface ArticleType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  postImage: string;
  author: {
    name: string;
    profileUrl: string;
  };
  publishedAt: string;
}

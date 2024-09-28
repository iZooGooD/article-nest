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
  author: ArticleAuthorType;
  publishedAt: string;
}

export interface ArticleAuthorType {
  username: string;
  name: string;
  profileUrl: string;
}

export interface SectionType {
  title: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
}

export interface ArticleDetailsType {
  id: number;
  title: string;
  description: ArticleDescriptionType;
  metadata: ArticleMetadataType;
  tags: string[];
  postImage: string;
  publishedAt: string;
  readTime: number;
  author: {
    name: string;
    profileUrl: string;
  };
}

export interface ArticleDescriptionType {
  sections: Array<SectionType>;
}

export interface ArticleMetadataType {
  likes: number;
  comments: number;
  shares: number;
}

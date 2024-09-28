export interface CommentType {
  id: number;
  comment: string;
  metadata: {
    likes: number;
  };
  author: AuthorType;
  publishedAt: string;
}

export interface AuthorType {
  name: string;
  username: string;
  profileUrl: string;
}

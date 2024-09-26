export interface ProfileType {
  name: string;
  profileUrl: string;
  bio: string;
  socialLinks: Array<SocialLinkType>;
  metaData: {
    followers: number;
    following: number;
    articles: number;
  };
}

export interface SocialLinkType {
  name: string;
  url: string;
}

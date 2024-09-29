export interface ProfileType {
  name: string;
  username: string;
  profileUrl: string;
  bio: string;
  keyHighlights: KeyHighlightsType;
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

export interface KeyHighlightsType {
  profileViews: number;
  articlesPublishedMonth: number;
  articlesEngaged: number;
}

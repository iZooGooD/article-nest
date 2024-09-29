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
export interface PrivateProfileType extends ProfileType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  following: Array<{
    id: string;
    name: string;
    username: string;
  }>;
  followers: Array<{
    id: string;
    name: string;
    username: string;
  }>;
  preferences: {
    isPrivate: boolean;
    articleUpdatesNotifications: boolean;
    emailNotifications: boolean;
  };
}

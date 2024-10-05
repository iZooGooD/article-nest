import React, { useEffect, useState } from "react";
import Layout from "src/components/common/Layout/Layout";
import { useParams } from "react-router-dom";
import { API } from "src/services/api";
import ArticleWideView from "src/components/common/ArticleWideViewCard/ArticleWideViewCard";
import { ProfileType } from "src/utils/types/profile";
import { ArticleType } from "src/utils/types/article";
import KeyHighlights from "src/components/AuthorProfile/KeyHighlights/KeyHighlights";
import AuthorProfileSkeleton from "src/components/AuthorProfile/AuthorProfileSkeleton/AuthorProfileSkeleton";
import { useNavigate } from "react-router-dom";

const AuthorProfile: React.FC = () => {
  const { username } = useParams();
  const [authorProfile, setAuthorProfile] = useState<ProfileType | null>(null);
  const [authorArticles, setAuthorArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);
      try {
        const profile = await API.getProfileDetailsUsingUsername(username!);
        const articles = await API.getArticlesByAuthor(username!);
        setAuthorProfile(profile);
        setAuthorArticles(articles);
      } catch (error) {
        console.error("Error fetching author data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [username]);

  if (isLoading) {
    return <AuthorProfileSkeleton />;
  }

  if (!authorProfile) {
    return (
      <Layout>
        <div className="text-center text-xl mt-10">Author not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="author-profile-container my-10 mx-auto max-w-6xl px-4">
        <div className="author-header flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-md">
          <img
            src={authorProfile.profileUrl}
            alt={authorProfile.name}
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-gray-200">
              {authorProfile.name}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-gray-400">
              {authorProfile.bio}
            </p>
            <div className="author-meta-data flex items-center gap-8 mt-4">
              <p className="text-sm text-neutral-800 dark:text-gray-400">
                <strong>{authorProfile.metaData.followers}</strong> Followers
              </p>
              <p className="text-sm text-neutral-800 dark:text-gray-400">
                <strong>{authorProfile.metaData.following}</strong> Following
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <button className="bg-brand text-white py-2 px-6 rounded-full hover:bg-brand-dark transition duration-300 shadow-md">
              Follow
            </button>
          </div>
        </div>

        <KeyHighlights
          articlesEngaged={authorProfile.keyHighlights.articlesEngaged}
          articlesPublishedMonth={
            authorProfile.keyHighlights.articlesPublishedMonth
          }
          profileViews={authorProfile.keyHighlights.profileViews}
        />

        <div className="author-articles mt-10 min-h-72">
          <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-gray-200">
            Articles by {authorProfile.name} ({authorArticles.length})
          </h3>
          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 mt-8 gap-y-4">
              {authorArticles.map((article) => (
                <ArticleWideView key={article.id} {...article} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-neutral-600 dark:text-gray-400">
              This author hasn’t published any articles yet.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AuthorProfile;

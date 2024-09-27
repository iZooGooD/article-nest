import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "src/components/Layout/Layout";
import { API } from "src/services/api";
import { ArticleDetailsType } from "src/utils/types/article";
import { ProfileType } from "src/utils/types/profile";

const ArticleReading: React.FC = () => {
  const { username, slug } = useParams();
  const [article, setArticle] = useState<ArticleDetailsType>();
  const [isArticleLoading, setIsArticleLoading] = useState<boolean>(true);
  const [authorProfile, setAuthorProfile] = useState<ProfileType>();
  const [isAuthorProfileLoading, setIsAuthorProfileLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchArticle = async (slug: string) => {
      const articleDetails = await API.getArticleDetails(slug);
      setArticle(articleDetails);
      setIsArticleLoading(false);
    };

    const fetchAuthorProfileDetails = async (username: string) => {
      const profile = await API.getProfileDetailsUsingUsername(username);
      setAuthorProfile(profile);
      setIsAuthorProfileLoading(false);
    };

    if (slug) {
      fetchArticle(slug);
    }
    if (username) {
      fetchAuthorProfileDetails(username);
    }
  }, [slug, username]);

  return (
    <Layout>
      <div className="flex flex-col mx-auto container  w-[85%] md:w-[70%] my-10">
        <div className="article-body border dark:border-black-faded rounded-lg p-8">
          <div className="article-header">
            <h1 className="text-5xl font-bold text-neutral-600 dark:text-grey-faded">
              {article?.title}
            </h1>
            <p className="dark:text-gray-400 text-neutral-600 mt-2">
              {article?.publishedAt} • {article?.readTime} min read
            </p>
          </div>
          <div className="article-content mt-8">
            {article?.description.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl font-semibold text-neutral-600 dark:text-grey-faded">
                  {section.title}
                </h2>
                <p className="mt-2 text-neutral-600 dark:text-grey-faded text-xl">
                  {section.content}
                </p>
                {section.image && (
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    className="mt-4"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="article-footer mt-8 flex items-center">
            <div className="article-meta-data flex gap-4 justify-end w-full">
              <p className="text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
                <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
                  {article?.metadata.likes}
                </span>{" "}
                Likes
              </p>
              <p className="text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
                <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
                  {article?.metadata.comments}
                </span>{" "}
                Comments
              </p>
              <p className="text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
                <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
                  {article?.metadata.shares}
                </span>{" "}
                Shares
              </p>
            </div>
          </div>
        </div>

        <div className="article-metadata mt-8 border  dark:border-black-faded rounded-lg p-8  shadow-lg">
          {/* Author Section */}
          <h4 className="about-author-text text-3xl font-bold mb-6 text-neutral-600 dark:text-grey-faded">
            About the author
          </h4>
          <div className="flex items-center mb-6">
            <img
              src={authorProfile?.profileUrl}
              alt={authorProfile?.name}
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div className="ml-6">
              <p className="text-xl font-semibold text-neutral-800 dark:text-gray-200">
                {authorProfile?.name}
              </p>
              <p className="text-lg text-neutral-600 dark:text-gray-400">
                {authorProfile?.bio}
              </p>
            </div>
          </div>

          {/* Follow Section */}
          <div className="flex items-center justify-between  p-6 rounded-lg shadow-md">
            <button className="bg-brand text-white py-2 px-6 rounded-full hover:bg-brand-dark transition duration-300 shadow-md">
              Follow
            </button>
            <div className="ml-8">
              <div className="flex items-center space-x-6">
                <p className=" text-neutral-600 dark:text-gray-400">
                  <span className="font-semibold text-xl text-neutral-800 dark:text-gray-200">
                    {authorProfile?.metaData.followers}
                  </span>{" "}
                  Followers
                </p>
                <span className="text-neutral-400">•</span>
                <p className=" text-neutral-800 dark:text-gray-200">
                  <span className="font-semibold text-xl">
                    {authorProfile?.metaData.following}
                  </span>{" "}
                  Following
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleReading;

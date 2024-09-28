import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "src/components/Layout/Layout";
import { API } from "src/services/api";
import { ArticleDetailsType } from "src/utils/types/article";
import { ProfileType } from "src/utils/types/profile";
import CommentList from "src/components/CommentList/CommentList";
import { CommentType } from "src/utils/types/comment";
import ArticleMetadata from "src/components/ArticleMetadata/ArticleMetadata";
import ArticleContent from "src/components/ArticleContent/ArticleContent";
import ArticleAuthorInfo from "src/components/ArticleAuthorInfo/ArticleAuthorInfo";

const ArticleReading: React.FC = () => {
  const { username, slug } = useParams();
  const [article, setArticle] = useState<ArticleDetailsType>();
  const [isArticleLoading, setIsArticleLoading] = useState<boolean>(true);
  const [authorProfile, setAuthorProfile] = useState<ProfileType>();
  const [isAuthorProfileLoading, setIsAuthorProfileLoading] =
    useState<boolean>(true);
  const [articleComments, setArticleComments] = useState<CommentType[]>([]);
  const [isArticleCommentsLoading, setIsArticleCommentsLoading] =
    useState<boolean>(true);

  const fetchComments = async (articleId: number) => {
    // TODO: Add pagination support using start and limit query params
    const comments = await API.getCommentsForArticle(articleId);
    setArticleComments([...articleComments, ...comments]);
    setIsArticleCommentsLoading(false);
  };

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
      fetchComments(slug);
    }
    if (username) {
      fetchAuthorProfileDetails(username);
    }
  }, [slug, username]);

  return (
    <Layout>
      <div className="flex flex-col mx-auto container  w-[95%] md:w-[70%] my-10">
        <div className="article-body border dark:border-black-faded rounded-lg p-3 md:p-8">
          <div className="article-header">
            <h1 className="text-5xl font-bold text-neutral-600 dark:text-grey-faded">
              {article?.title}
            </h1>
            <p className="dark:text-gray-400 text-neutral-600 mt-2">
              {article?.publishedAt} • {article?.readTime} min read
            </p>
          </div>
          {article?.description?.sections && (
            <ArticleContent sections={article?.description.sections} />
          )}
          <div className="article-footer mt-8 flex flex-col items-center px-4">
            <ArticleMetadata
              likes={article?.metadata.likes || 0}
              comments={article?.metadata.comments || 0}
              shares={article?.metadata.shares || 0}
            />
            <CommentList
              articleId={article?.id || 0}
              comments={articleComments}
              fetchComments={fetchComments}
              totalComments={article?.metadata.comments || 0}
              isLoading={isArticleCommentsLoading}
            />
          </div>
        </div>
        {article && authorProfile && (
          <ArticleAuthorInfo
            name={authorProfile?.name}
            profileUrl={authorProfile?.profileUrl}
            bio={authorProfile?.bio}
            socialLinks={authorProfile?.socialLinks}
            metaData={authorProfile?.metaData}
          />
        )}
      </div>
    </Layout>
  );
};

export default ArticleReading;

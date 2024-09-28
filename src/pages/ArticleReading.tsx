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
import ArticleContentSkeleton from "src/components/ArticleContentSkeleton/ArticleContentSkeleton";
import CommentListSkeleton from "src/components/CommentListSkeleton/CommentListSkeleton";
import ArticleAuthorInfoSkeleton from "src/components/ArticleAuthorInfoSkeleton/ArticleAuthorInfoSkeleton";

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

  const isArticleContentLoaded = article && !isArticleLoading;

  const isArticleAuthorInfoLoaded = authorProfile && !isAuthorProfileLoading;

  const isArticleCommentsLoaded = articleComments && !isArticleCommentsLoading;

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

  useEffect(() => {
    if (article) {
      fetchComments(article.id);
    }
  }, [article]);

  return (
    <Layout>
      <div className="flex flex-col mx-auto container  w-[95%] md:w-[70%] my-10">
        <div className="article-body border dark:border-black-faded rounded-lg p-3 md:p-8">
          {isArticleContentLoaded ? (
            <ArticleContent
              title={article.title}
              publishedAt={article.publishedAt}
              readTime={article.readTime}
              sections={article?.description.sections}
            />
          ) : (
            <ArticleContentSkeleton />
          )}

          {isArticleContentLoaded && isArticleCommentsLoaded ? (
            <div className="article-footer mt-4 flex flex-col items-center px-2 md:px-4">
              <ArticleMetadata
                likes={article.metadata.likes}
                comments={article.metadata.comments}
                shares={article.metadata.shares}
              />
              <CommentList
                articleId={article?.id}
                comments={articleComments}
                fetchComments={fetchComments}
                totalComments={article.metadata.comments}
              />
            </div>
          ) : (
            <CommentListSkeleton />
          )}
        </div>

        {isArticleAuthorInfoLoaded ? (
          <ArticleAuthorInfo
            name={authorProfile.name}
            profileUrl={authorProfile.profileUrl}
            bio={authorProfile.bio}
            socialLinks={authorProfile.socialLinks}
            metaData={authorProfile.metaData}
          />
        ) : (
          <ArticleAuthorInfoSkeleton />
        )}
      </div>
    </Layout>
  );
};

export default ArticleReading;

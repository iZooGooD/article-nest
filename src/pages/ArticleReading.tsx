import { useParams } from "react-router-dom";
import Layout from "src/components/common/Layout/Layout";
import { API } from "src/services/api";
import CommentList from "src/components/ArticleReading/CommentList/CommentList";
import ArticleMetadata from "src/components/ArticleReading/ArticleMetadata/ArticleMetadata";
import ArticleContent from "src/components/ArticleReading/ArticleContent/ArticleContent";
import ArticleAuthorInfo from "src/components/ArticleReading/ArticleAuthorInfo/ArticleAuthorInfo";
import ArticleContentSkeleton from "src/components/ArticleReading/ArticleContentSkeleton/ArticleContentSkeleton";
import CommentListSkeleton from "src/components/ArticleReading/CommentListSkeleton/CommentListSkeleton";
import ArticleAuthorInfoSkeleton from "src/components/ArticleReading/ArticleAuthorInfoSkeleton/ArticleAuthorInfoSkeleton";
import { useQuery } from "react-query";

const ArticleReading: React.FC = () => {
  const { username, slug } = useParams();

  const { data: article, isLoading: isArticleLoading } = useQuery(
    ["article"],
    () =>
      slug ? API.getArticleDetails(slug) : Promise.reject("No slug available"),
    {
      enabled: !!slug,
    }
  );

  const { data: authorProfile, isLoading: isAuthorProfileLoading } = useQuery(
    "authorProfile",
    () =>
      username
        ? API.getProfileDetailsUsingUsername(username ?? "")
        : Promise.reject("No username available"),
    {
      enabled: !!username,
    }
  );

  const { data: articleComments, isLoading: isArticleCommentsLoading } =
    useQuery(
      "articleComments",
      () =>
        article?.id
          ? API.getCommentsForArticle(article.id)
          : Promise.reject("No article id is available"),
      {
        enabled: !!article,
      }
    );

  const isArticleContentLoaded = article && !isArticleLoading;

  const isArticleAuthorInfoLoaded = authorProfile && !isAuthorProfileLoading;

  const isArticleCommentsLoaded = articleComments && !isArticleCommentsLoading;

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
                comments={articleComments}
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
            username={authorProfile.username}
            profileUrl={authorProfile.profileUrl}
            bio={authorProfile.bio}
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

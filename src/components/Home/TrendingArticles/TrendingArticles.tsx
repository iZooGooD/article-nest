import { ArticleType } from "src/utils/types/article";
import ArticleViewSkeleton from "src/components/common/ArticleViewCardSkeleton/ArticleViewCardSkeleton";
import ArticleViewCard from "src/components/common/ArticleViewCard/ArticleViewCard";
import type { QueryStatus } from "react-query";
import LoadingError from "src/components/common/LoadingError/LoadingError";

interface TrendingArticlesProps {
  articles: Array<ArticleType>;
  status: QueryStatus;
}

const TrendingArticles: React.FC<TrendingArticlesProps> = ({
  articles,
  status,
}) => {
  return (
    <div className="md:container mx-2 md:mx-auto mt-14 dark:text-white text-black">
      <div className="flex items-center">
        <h3 className="text-2xl md:text-3xl font-medium">
          Explore trending articles
        </h3>
        <div className="flex flex-col border-t-2 flex-1 ml-3 border-green-700"></div>
        <div className="flex flex-col border-t-2 flex-1  border-gray-500"></div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {status === "loading" &&
          Array.from({ length: 6 }).map((_, index) => (
            <ArticleViewSkeleton key={index} />
          ))}
        {status === "success" &&
          articles.map((article) => (
            <ArticleViewCard key={article.id} {...article} />
          ))}
      </section>
      {status === "error" && <LoadingError />}
    </div>
  );
};

export default TrendingArticles;

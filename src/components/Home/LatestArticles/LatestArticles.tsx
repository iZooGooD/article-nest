import { ArticleType } from "src/utils/types/article";
import ArticleWideViewCard from "src/components/common/ArticleWideViewCard/ArticleWideViewCard";
import ArticleWideViewCardSkeleton from "src/components/common/ArticleWideViewCardSkeleton/ArticleWideViewCardSkeleton";
import type { QueryStatus } from "react-query";

interface TrendingArticlesProps {
  articles: Array<ArticleType>;
  status: QueryStatus;
}

const LatestArticles: React.FC<TrendingArticlesProps> = ({
  articles,
  status,
}) => {
  return (
    <div className="md:container mx-2 md:mx-auto mt-14 dark:text-white text-black">
      <div className="flex items-center">
        <h3 className="text-2xl md:text-3xl font-medium">Latest Articles</h3>
        <div className="flex flex-col border-t-2 flex-1 ml-3 border-green-700"></div>
        <div className="flex flex-col border-t-2 flex-1  border-gray-500"></div>
      </div>
      <section className="grid grid-cols-1 mt-8 gap-y-4">
        {status === "loading" &&
          Array.from({ length: 6 }).map((_, index) => (
            <ArticleWideViewCardSkeleton key={index} />
          ))}
        {status === "success" &&
          articles.map((article) => (
            <ArticleWideViewCard key={article.id} {...article} />
          ))}
      </section>
    </div>
  );
};

export default LatestArticles;

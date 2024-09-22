import React from "react";
import ArticleView from "../ArticleView/ArticleView";
import { ArticleType } from "../../utils/types/article";
import ArticleViewSkeleton from "../ArticleViewSkeleton/ArticleViewSkeleton";

interface TrendingArticlesProps {
  articles: Array<ArticleType>;
  isLoading: boolean;
}

const TrendingArticles: React.FC<TrendingArticlesProps> = ({
  articles,
  isLoading,
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ArticleViewSkeleton key={index} />
            ))
          : articles.map((article) => (
              <ArticleView key={article.id} {...article} />
            ))}
      </section>
    </div>
  );
};

export default TrendingArticles;

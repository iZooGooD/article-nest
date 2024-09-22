import React from "react";
import { ArticleType } from "../../utils/types/article";
import ArticleWideView from "../ArticleWideView/ArticleWideView";

interface TrendingArticlesProps {
  articles: Array<ArticleType>;
}

const LatestArticles: React.FC<TrendingArticlesProps> = ({ articles }) => {
  return (
    <div className="md:container mx-2 md:mx-auto mt-14 dark:text-white text-black">
      <div className="flex items-center">
        <h3 className="text-2xl md:text-3xl font-medium">Latest Articles</h3>
        <div className="flex flex-col border-t-2 flex-1 ml-3 border-green-700"></div>
        <div className="flex flex-col border-t-2 flex-1  border-gray-500"></div>
      </div>
      <section className="grid grid-cols-1 mt-8 gap-y-4">
        {articles.map((article) => (
          <ArticleWideView key={article.id} {...article} />
        ))}
      </section>
    </div>
  );
};

export default LatestArticles;

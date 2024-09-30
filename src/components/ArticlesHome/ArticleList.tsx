import ArticleWideViewCard from "src/components/common/ArticleWideViewCard/ArticleWideViewCard";
import ArticleWideViewCardSkeleton from "src/components/common/ArticleWideViewCardSkeleton/ArticleWideViewCardSkeleton";
import { ArticleType } from "src/utils/types/article";

interface ArticlesListProps {
  articles: Array<ArticleType>;
  isLoading: boolean;
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles, isLoading }) => {
  return (
    <div className="articles-list grid gap-6">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <ArticleWideViewCardSkeleton key={index} />
          ))
        : articles.map((article) => (
            <ArticleWideViewCard key={article.id} {...article} />
          ))}
    </div>
  );
};

export default ArticlesList;

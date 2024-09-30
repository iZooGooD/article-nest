import TrendingArticles from "src/components/Home/TrendingArticles/TrendingArticles";
import { useState, useEffect } from "react";
import { ArticleType } from "src/utils/types/article";
import { API } from "src/services/api";
import LatestArticles from "src/components/Home/LatestArticles/LatestArticles";
import Layout from "src/components/common/Layout/Layout";
import Button from "src/components/common/_ux/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // State for trending and latest articles
  const [trendingArticles, setTrendingArticles] = useState<ArticleType[]>([]);
  const [latestArticles, setLatestArticles] = useState<ArticleType[]>([]);
  const [isTrendingArticlesLoading, setIsTrendingArticlesLoading] =
    useState<boolean>(true);
  const [isLatestArticlesLoading, setIsLatestArticlesLoading] =
    useState<boolean>(true);
  useEffect(() => {
    const fetchTrendingArticles = async () => {
      const articles = await API.getTrendingArticles();
      setTrendingArticles(articles);
      setIsTrendingArticlesLoading(false);
    };
    const fetchLatestArticles = async () => {
      const articles = await API.getLatestArticles();
      setLatestArticles(articles);
      setIsLatestArticlesLoading(false);
    };
    fetchTrendingArticles();
    fetchLatestArticles();
  }, []);

  return (
    <Layout>
      <div>
        <TrendingArticles
          articles={trendingArticles}
          isLoading={isTrendingArticlesLoading}
        />
        <LatestArticles
          articles={latestArticles}
          isLoading={isLatestArticlesLoading}
        />
        <div className="my-8 flex justify-center">
          <Button
            type="primary"
            size="md"
            onClick={() => {
              navigate("/articles");
            }}
            text="Explore more"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;

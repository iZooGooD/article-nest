import Header from "../components/Header/Header";
import TrendingArticles from "../components/TrendingArticles/TrendingArticles";
import { useState, useEffect } from "react";
import { ArticleType } from "../utils/types/article";
import { API } from "../services/api";

function Home() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  useEffect(() => {
    const fetchTrendingArticles = async () => {
      const trendingArticles = await API.getTrendingArticles();
      setArticles(trendingArticles);
    };
    fetchTrendingArticles();
  }, []);
  return (
    <div>
      <Header />
      <div className="dark:bg-grey-dark bg-neutral-light flex flex-col">
        <TrendingArticles articles={articles} />
      </div>
    </div>
  );
}

export default Home;

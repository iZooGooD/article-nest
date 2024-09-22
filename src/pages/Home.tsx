import Header from "../components/Header/Header";
import TrendingArticles from "../components/TrendingArticles/TrendingArticles";
import { useState, useEffect } from "react";
import { ArticleType } from "../utils/types/article";
import { API } from "../services/api";
import LatestArticles from "../components/LatestArticles/LatestArticles";
import Footer from "../components/Footer/Footer";

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
        <LatestArticles articles={articles} />
        <div className="my-8 flex">
          <button className="mx-auto bg-brand text-white py-2 px-4 rounded-md">
            Explore more
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

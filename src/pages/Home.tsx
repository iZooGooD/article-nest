import TrendingArticles from "src/components/Home/TrendingArticles/TrendingArticles";
import { API } from "src/services/api";
import LatestArticles from "src/components/Home/LatestArticles/LatestArticles";
import Layout from "src/components/common/Layout/Layout";
import Button from "src/components/common/_ux/Button/Button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function Home() {
  const navigate = useNavigate();

  const { data: trendingArticles, status: trendingArticlesStatus } = useQuery(
    "trendingArticles",
    API.getTrendingArticles
  );
  const { data: latestArticles, status: latestArticlesStatus } = useQuery(
    "latestArticles",
    API.getLatestArticles
  );

  return (
    <Layout>
      <div>
        <TrendingArticles
          articles={trendingArticles ?? []}
          status={trendingArticlesStatus}
        />
        <LatestArticles
          articles={latestArticles ?? []}
          status={latestArticlesStatus}
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

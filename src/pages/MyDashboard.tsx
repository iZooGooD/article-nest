import React, { useEffect, useState } from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "src/components/common/_ux/Button/Button";
import Layout from "src/components/common/Layout/Layout";
import { useNavigate } from "react-router-dom";
import DashboardArticles from "src/components/MyDashboard/DashboardArticles";
import { API } from "src/services/api";
import { ArticleStatsType } from "src/utils/types/article";

const MyDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleStatsType[]>([]);
  // TODO: user to loggedin users name later when redux/context api is ready
  const [user] = useState<string>("John doe");

  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const handleToggleVisibility = (id: number) => {
    setArticles(
      articles.map((article) =>
        article.id === id
          ? { ...article, isPrivate: !article.isPrivate }
          : article
      )
    );
  };

  const handleEditArticle = (id: number) => {
    navigate(`/editor?mode=edit&articleid=${id}`);
  };

  const handleCreateNewArticle = () => {
    navigate(`/editor?mode=create`);
  };

  useEffect(() => {
    const fetchUserDashboardArticles = async () => {
      // TODO: replace hardcoded `1` to loggedin users id later when redux/context api is ready
      const articleResponse = await API.getUserDashboardArticles(1);
      setArticles(articleResponse);
    };
    fetchUserDashboardArticles();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-8  min-h-screen">
        <div className="text-2xl md:text-3xl font-medium dark:text-white text-black">
          Welcome back, {user}!
        </div>

        {articles.length > 0 ? (
          <DashboardArticles
            articles={articles}
            onDelete={handleDeleteArticle}
            onToggleVisibility={handleToggleVisibility}
            onEdit={handleEditArticle}
          />
        ) : (
          <div>
            <p className="text-xl font-medium text-gray-600 mt-8">
              You don't have any draft/published articles, go ahead and write
              your first article.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Button
            text="Create New Article"
            size="s"
            type="primary"
            icon={faArrowCircleRight}
            onClick={handleCreateNewArticle}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MyDashboard;

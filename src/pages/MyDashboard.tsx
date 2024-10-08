import React from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "src/components/common/_ux/Button/Button";
import Layout from "src/components/common/Layout/Layout";
import { useNavigate } from "react-router-dom";
import DashboardArticles from "src/components/MyDashboard/DashboardArticles";
import { API } from "src/services/api";
import { useQuery } from "react-query";
import { useAuth } from "src/contexts/AuthContext";

const MyDashboard: React.FC = () => {
  const { state } = useAuth();
  const navigate = useNavigate();
  const userFullName = `${state.user?.firstName} ${state.user?.lastName}`;

  const { data: articles } = useQuery(["articlesStats"], () =>
    API.getUserDashboardArticles(1)
  );

  // TODO: Implement delete call
  const handleDeleteArticle = (id: number) => {
    console.log("handleDeleteArticle", id);
  };

  const handleToggleVisibility = (id: number) => {
    console.log("handleToggleVisibility", id);
  };

  const handleEditArticle = (id: number) => {
    navigate(`/articleEditor?mode=edit&articleid=${id}`);
  };

  const handleCreateNewArticle = () => {
    navigate(`/articleEditor?mode=create`);
  };

  return (
    <Layout>
      <div className="container mx-auto p-8  min-h-screen">
        <div className="text-2xl md:text-3xl font-medium dark:text-white text-black">
          Welcome back, {userFullName}!
        </div>

        {articles && articles.length > 0 ? (
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

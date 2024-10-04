import React from "react";
import {
  faEdit,
  faTrash,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../common/_ux/Button/Button";
import { ArticleStatsType } from "src/utils/types/article";

interface DashboardArticlesProps {
  articles: ArticleStatsType[];
  onDelete: (id: number) => void;
  onToggleVisibility: (id: number) => void;
  onEdit: (id: number) => void;
}

const DashboardArticles: React.FC<DashboardArticlesProps> = ({
  articles,
  onDelete,
  onToggleVisibility,
  onEdit,
}) => (
  <div>
    <p className="text-xl font-medium text-gray-600 mt-8">
      Here are your recent articles.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-2">
      {articles.map((article) => (
        <div
          key={article.id}
          className="dark:bg-black-faded bg-white rounded-lg shadow-md p-6 flex flex-col justify-between transition transform hover:shadow-xl hover:scale-105"
        >
          <div>
            <h3 className="md:text-xl text-brand font-medium line-clamp-1">
              {article.title}
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Published on: {article.publishedDate}
            </p>
            <p className="text-sm text-gray-400">Views: {article.views}</p>
            <p className="text-sm text-gray-400">
              Comments: {article.comments}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4 space-x-2">
            <Button
              text="Edit"
              size="xs"
              type="secondary"
              icon={faEdit}
              onClick={() => onEdit(article.id)}
            />
            <Button
              text={article.isPrivate ? "Make Public" : "Make Private"}
              size="xs"
              type="secondary"
              icon={article.isPrivate ? faEyeSlash : faEye}
              onClick={() => onToggleVisibility(article.id)}
            />
            <Button
              text="Delete"
              size="xs"
              type="danger"
              icon={faTrash}
              onClick={() => onDelete(article.id)}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardArticles;

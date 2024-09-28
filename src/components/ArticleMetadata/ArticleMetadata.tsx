import React from "react";
import { ArticleMetadataType as ArticleMetadataProps } from "src/utils/types/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({
  likes,
  comments,
  shares,
}) => {
  return (
    <div className="article-meta-data flex gap-4 justify-between w-full my-4">
      <div className="flex items-center text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded hover:text-red-500">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="transition duration-300 dark:text-neutral-200 text-neutral-400"
          onClick={() => console.log("Liked")}
        />
        <span className="ml-2">Like</span>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-4 flex-col">
          <p className="text-sm text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
            <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
              {likes}
            </span>{" "}
            Likes
          </p>
        </div>

        <div className="flex items-center gap-4 flex-col">
          <p className="text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
            <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
              {shares}
            </span>{" "}
            Shares
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleMetadata;

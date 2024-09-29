import React from "react";
import { ArticleMetadataType as ArticleMetadataProps } from "src/utils/types/article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

const ArticleMetadata: React.FC<ArticleMetadataProps> = ({ likes, shares }) => {
  // TODO: Implement like functionality
  const onLikeButtonClick = () => toast.success("You liked this article!");
  return (
    <div className="article-meta-data flex gap-4 justify-between w-full my-4">
      <div className="flex gap-4">
        <div className="flex items-center gap-4 flex-col">
          <button
            onClick={onLikeButtonClick}
            className="transition duration-300 text-xl hover:bg-green-500 hover:text-white text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded font-semibold"
          >
            <FontAwesomeIcon icon={faThumbsUp} className=" text-xl mr-2" />
            {likes}
          </button>
        </div>

        <div className="flex items-center gap-4 flex-col">
          <p className="text-neutral-600 dark:text-grey-faded rounded-lg px-4 bg-white shadow-sm dark:bg-black-faded">
            <FontAwesomeIcon
              icon={faShare}
              className="transition duration-300 hover:text-green-500 dark:text-neutral-200 text-neutral-400 text-xl mr-2"
            />
            <span className="font-semibold text-xl dark:text-neutral-200 text-neutral-600">
              {shares}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleMetadata;

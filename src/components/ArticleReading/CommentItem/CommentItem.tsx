import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommentType as CommentProps } from "src/utils/types/comment";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CommentItem: React.FC<CommentProps> = ({
  author,
  comment,
  publishedAt,
  metadata,
}) => {
  return (
    <div className="comment-card flex items-center gap-4 mt-4 relative w-full">
      <Link to={`/${author.username}`}>
        <img
          src={author?.profileUrl}
          alt={author?.name}
          className="w-12 h-12 rounded-full shadow-md"
        />
      </Link>
      <div className="p-4 w-full rounded-lg shadow-sm border border-grey-faded dark:border-black-faded relative after:content-[''] after:absolute after:left-[-29px] after:top-1/2 after:-translate-y-1/2 after:border-[14px] after:border-transparent after:border-r-grey-faded dark:after:border-r-black-faded">
        <div className="flex items-center">
          <Link to={`/${author.username}`} className="hover:underline">
            <p className="text-neutral-800 dark:text-gray-200 font-semibold text-sm md:text-lg">
              {author?.name}
            </p>
          </Link>
          <p className="ml-2 text-neutral-600 dark:text-gray-400 text-xs md:text-sm">
            {publishedAt}
          </p>
        </div>

        <p className="text-neutral-600 dark:text-gray-400">{comment}</p>
        <div className="comment-meta-data flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <div className="thumbs-up-count text-neutral-600 dark:text-gray-400">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="ml-2 hover:text-red-500"
              />
              <span className="ml-2">{metadata.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;

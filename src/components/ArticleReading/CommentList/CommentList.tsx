import { CommentType } from "src/utils/types/comment";
import CommentItem from "src/components/ArticleReading/CommentItem/CommentItem";
import Button from "src/components/Common/_ux/Button/Button";

interface CommentListProps {
  articleId: number;
  totalComments: number;
  comments: Array<CommentType>;
  fetchComments: (articleId: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  articleId,
  totalComments,
  comments,
  fetchComments,
}) => {
  const renderCommentItems = () =>
    comments.map((comment) => (
      <CommentItem
        key={comment.id}
        id={comment.id}
        author={comment.author}
        comment={comment.comment}
        publishedAt={comment.publishedAt}
        metadata={comment.metadata}
      />
    ));

  const renderCommentSort = () => (
    <select className="rounded-lg p-1 shadow-sm dark:text-neutral-200 text-neutral-600 w-36 bg-white dark:bg-black-faded">
      <option value="popular">Sort by: Popular</option>
      <option value="newest">Sort by: Latest</option>
      <option value="oldest">Sort by: Oldest</option>
    </select>
  );

  const renderNoCommentsMessage = () => (
    <div className="no-comments-yet text-neutral-600 dark:text-grey-faded text-lg my-4">
      No comments yet. Be the first one to comment and share your thoughts.
    </div>
  );

  const renderLoadMoreButton = () => (
    <div className="comments-load-more my-4 w-full flex md:justify-end">
      <Button
        text="Load more comments"
        type="secondary"
        size="s"
        onClick={() => fetchComments(articleId)}
      />
    </div>
  );

  return (
    <div className="article-comments-section flex flex-col items-center gap-4 mt-4 w-full">
      <div className="comment-list flex flex-col w-full">
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 dark:text-grey-faded text-xl font-medium">
            Comments ({totalComments})
          </p>
          {comments.length > 0 && renderCommentSort()}
        </div>

        {comments.length === 0
          ? renderNoCommentsMessage()
          : renderCommentItems()}

        {comments.length > 0 && renderLoadMoreButton()}

        <div className="comment-input-card my-6 w-full flex flex-col md:items-end md:pl-16">
          <textarea
            placeholder="Add a comment..."
            className="px-4 py-2 my-4 w-full shadow-sm dark:bg-black-faded text-neutral-600 dark:text-white"
            rows={4}
          />
          <Button text="Post Comment" type="primary" size="s" />
        </div>
      </div>
    </div>
  );
};

export default CommentList;

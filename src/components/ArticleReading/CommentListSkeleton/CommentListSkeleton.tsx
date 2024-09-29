import React from "react";

const CommentItemSkeleton: React.FC = () => {
  return (
    <div className="comment-card flex items-center gap-4 mt-4 w-full animate-pulse">
      {/* Skeleton for the author profile picture */}
      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-700"></div>

      {/* Skeleton for the comment content */}
      <div className="p-4 w-full rounded-lg shadow-sm border border-grey-faded dark:border-black-faded bg-gray-200 dark:bg-slate-700 relative">
        <div className="flex items-center mb-2">
          {/* Skeleton for author name */}
          <div className="w-1/4 h-4 bg-gray-300 dark:bg-slate-600 rounded"></div>
          {/* Skeleton for published at */}
          <div className="ml-2 w-1/6 h-4 bg-gray-300 dark:bg-slate-600 rounded"></div>
        </div>

        {/* Skeleton for the comment text */}
        <div className="w-full h-4 bg-gray-300 dark:bg-slate-600 rounded mb-2"></div>
        <div className="w-3/4 h-4 bg-gray-300 dark:bg-slate-600 rounded mb-2"></div>

        {/* Skeleton for thumbs up and other metadata */}
        <div className="flex items-center mt-4">
          <div className="w-10 h-4 bg-gray-300 dark:bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const CommentListSkeleton: React.FC = () => {
  return (
    <div className="article-comments-section flex flex-col items-center gap-4 mt-4 w-full">
      <div className="comment-list flex flex-col w-full">
        {/* Skeleton for the comment section header */}
        <div className="flex justify-between items-center mb-4 w-full">
          {/* Skeleton for the comments count */}
          <div className="w-1/4 h-6 bg-gray-200 dark:bg-slate-700 rounded"></div>

          {/* Skeleton for the sort option */}
          <div className="w-24 h-6 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>

        {/* Simulating multiple comment skeletons */}
        {[1, 2, 3].map((_, index) => (
          <CommentItemSkeleton key={index} />
        ))}

        {/* Skeleton for the load more button */}
        <div className="comments-load-more my-4 w-full flex md:justify-end">
          <div className="w-40 h-8 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>

        {/* Skeleton for the comment input field */}
        <div className="comment-input-card my-6 w-full flex flex-col md:items-end md:pl-16">
          <div className="w-full h-24 bg-gray-200 dark:bg-slate-700 rounded mb-4"></div>
          <div className="w-24 h-8 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default CommentListSkeleton;

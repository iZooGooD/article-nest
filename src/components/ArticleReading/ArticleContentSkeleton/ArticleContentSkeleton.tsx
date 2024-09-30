const ArticleContentSkeleton: React.FC = () => {
  return (
    <div>
      {/* Skeleton for the article header */}
      <div className="article-header mb-4">
        {/* Skeleton for the title */}
        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded-full w-3/4 animate-pulse mb-4"></div>

        {/* Skeleton for published date and read time */}
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-1/3 animate-pulse"></div>
      </div>

      {/* Skeleton for the article content */}
      <div className="article-content mt-8 border-b dark:border-black-faded">
        {/* Simulating multiple sections with skeletons */}
        {[1].map((_, index) => (
          <div key={index} className="mb-8">
            {/* Skeleton for section title */}
            <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full w-1/2 animate-pulse mb-4"></div>

            {/* Skeleton for section content */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-2/3 animate-pulse"></div>
            </div>

            {/* Optional Skeleton for image if present */}
            <div className="mt-4 h-48 bg-gray-200 dark:bg-slate-700 rounded-sm animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleContentSkeleton;

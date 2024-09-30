const ArticleAuthorInfoSkeleton: React.FC = () => {
  return (
    <div className="mt-8 border dark:border-black-faded rounded-lg p-3 md:p-8 shadow-lg animate-pulse">
      {/* Skeleton for the "About the Author" heading */}
      <div className="h-8 w-1/3 bg-gray-200 dark:bg-slate-700 rounded mb-6"></div>

      {/* Skeleton for the author info section */}
      <div className="flex items-center mb-6">
        {/* Skeleton for the author profile image */}
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-slate-700"></div>

        {/* Skeleton for the author name and bio */}
        <div className="ml-6 flex flex-col space-y-2">
          <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-48 bg-gray-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>

      {/* Skeleton for the follow button and social stats */}
      <div className="flex items-center justify-between p-6 rounded-lg shadow-md bg-gray-200 dark:bg-slate-700">
        {/* Skeleton for the follow button */}
        <div className="h-10 w-24 bg-gray-300 dark:bg-slate-600 rounded-full"></div>

        {/* Skeleton for the followers and following section */}
        <div className="flex items-center space-x-6 ml-8">
          <div className="h-4 w-20 bg-gray-300 dark:bg-slate-600 rounded"></div>
          <span className="h-4 w-1 bg-gray-300 dark:bg-slate-600"></span>
          <div className="h-4 w-20 bg-gray-300 dark:bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthorInfoSkeleton;

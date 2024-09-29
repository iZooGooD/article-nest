import React from "react";

const ArticleWideViewCardSkeleton: React.FC = () => {
  return (
    <div className="md:flex-row flex flex-row-reverse rounded-md dark:bg-black-faded bg-white shadow-sm my-2">
      {/* Skeleton for the image */}
      <div className="h-[100%] md:h-[180px] md:w-[380px] image-wrapper flex items-center">
        <div className="h-[100px] w-[220px] md:h-[180px] md:w-[380px] bg-gray-200 dark:bg-slate-700 animate-pulse rounded-sm"></div>
      </div>

      {/* Skeleton for the article content */}
      <div className="flex flex-col justify-between py-2 px-4 h-[100%] w-full">
        <div>
          {/* Skeleton for the title */}
          <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full w-full mb-4 animate-pulse"></div>

          {/* Skeleton for the description */}
          <div className="space-y-2 mb-4">
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full w-full animate-pulse"></div>
            <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full w-2/3 animate-pulse"></div>
          </div>

          {/* Skeleton for the tags */}
          <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded-full w-1/2 animate-pulse"></div>
        </div>

        {/* Skeleton for the author section */}
        <div className="flex items-center my-2">
          <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse mr-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleWideViewCardSkeleton;

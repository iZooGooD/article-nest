import Layout from "src/components/Common/Layout/Layout";
import ArticleWideViewSkeleton from "../../Common/ArticleWideViewCardSkeleton/ArticleWideViewCardSkeleton";

const AuthorProfileSkeleton: React.FC = () => {
  return (
    <Layout>
      <div className="mx-auto container author-profile-container my-10 max-w-6xl px-4">
        {/* Author Header Skeleton */}
        <div className="author-header flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-md animate-pulse">
          <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="flex-1 space-y-4">
            <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-64 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="flex items-center gap-8 mt-4">
              <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="ml-auto w-24 h-10 bg-brand/50 rounded-full"></div>
        </div>

        {/* Key Highlights Skeleton */}
        <div className="key-highlights mt-6 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-md animate-pulse">
          <div className="w-40 h-6 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3"></div>
              <div className="w-60 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3"></div>
              <div className="w-60 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full mr-3"></div>
              <div className="w-60 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </li>
          </ul>
        </div>

        {/* Article Skeletons */}
        <div className="author-articles mt-10">
          <div className="w-48 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleWideViewSkeleton key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AuthorProfileSkeleton;
